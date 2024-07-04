import React, { useEffect, useState } from "react";
import { Howler, Howl } from "howler";
import { MusicInstances } from "../../utils/Constants";
import TrackList from "../../components/audio/TrackList";
import Player from "../../components/audio/Player";
import HowlWithId from "../../components/audio/HowlWithId";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackDetail, setTrackDetail] = useState("");
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [repeatMode, setRepeatMode] = useState("off");
  const [selectedMusic, setSelectedMusic] = useState(null);

  useEffect(() => {
    setTrackDetail(
      MusicInstances?.find((item, index) => index === currentTrackIndex)
    );
  }, [currentTrackIndex]);

  useEffect(() => {
    setCurrentTime(0);
    if (selectedMusic) selectedMusic.seek(0);
  }, [selectedMusic]);

  useEffect(() => {
    let timerInterval;
    if (selectedMusic) {
      const updateTimer = () => {
        const seekTime = Math.round(selectedMusic.seek());
        setCurrentTime(seekTime);
      };
      timerInterval = setInterval(updateTimer, 1000);
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [selectedMusic]);

  useEffect(() => {
    if (selectedMusic) {
      selectedMusic.off("end");
      selectedMusic.on("end", () => {
        if (repeatMode === "one") {
          selectedMusic.play();
          setIsPlaying(true);
        } else if (repeatMode === "all") {
          handlePlayNext();
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      });
    }
  }, [selectedMusic, repeatMode, currentTrackIndex]);

  const handlePlay = () => {
    if (!selectedMusic) return;

    if (isPlaying) {
      selectedMusic.pause();
      setIsPlaying(false);
    } else {
      selectedMusic.play();
      setIsPlaying(true);
    }
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    Howler.mute(!isMuted);
  };

  const handleVolumeChange = (value) => {
    Howler.volume(value / 100);
  };

  const playTrack = (index) => {
    if (selectedMusic) {
      selectedMusic.stop();
      selectedMusic.off("end");
    }

    const newTrack = new HowlWithId(
      {
        src: [MusicInstances[index].src],
        autoplay: false,
        html5: true,
      },
      MusicInstances[index].id
    );

    newTrack.on("end", () => {
      if (repeatMode === "one") {
        newTrack.play();
        setIsPlaying(true);
      } else if (repeatMode === "all") {
        const nextIndex = (index + 1) % MusicInstances.length;
        playTrack(nextIndex);
      } else {
        setIsPlaying(false);
      }
    });

    setSelectedMusic(newTrack);
    setCurrentTrackIndex(index);
    setTrackDetail(MusicInstances[index]);
    setIsPlaying(true);
    newTrack.play();
  };

  const handlePlayNext = () => {
    const nextIndex = (currentTrackIndex + 1) % MusicInstances.length;
    playTrack(nextIndex);
  };

  const handlePlayPrev = () => {
    const prevIndex =
      (currentTrackIndex - 1 + MusicInstances.length) % MusicInstances.length;
    playTrack(prevIndex);
  };

  const handleRepeat = () => {
    if (repeatMode === "off") {
      setRepeatMode("one");
    } else if (repeatMode === "one") {
      setRepeatMode("all");
    } else {
      setRepeatMode("off");
    }
  };

  const handleSeekChange = (value) => {
    setCurrentTime(value);
    if (selectedMusic) selectedMusic.seek(value);
  };

  const handleTrackToggle = (track, index) => {
    setTrackDetail(track);
    setCurrentTrackIndex(index);

    if (selectedMusic && selectedMusic.id === track.id) {
      if (isPlaying) {
        selectedMusic.pause();
        setIsPlaying(false);
      } else {
        selectedMusic.play();
        setIsPlaying(true);
      }
    } else {
      playTrack(index);
    }
  };

  return (
    <>
      <TrackList
        trackList={MusicInstances}
        toggleTrack={handleTrackToggle}
        isPlaying={isPlaying}
        selectedMusic={selectedMusic}
      />
      {selectedMusic && (
        <Player
          trackDetail={trackDetail}
          currentTime={currentTime}
          selectedMusic={selectedMusic}
          toggleMute={handleMute}
          isMuted={isMuted}
          togglePrev={handlePlayPrev}
          togglePlay={handlePlay}
          isPlaying={isPlaying}
          toggleNext={handlePlayNext}
          toggleRepeat={handleRepeat}
          repeatMode={repeatMode}
          handleSeekChange={handleSeekChange}
        />
      )}
    </>
  );
};

export default Index;
