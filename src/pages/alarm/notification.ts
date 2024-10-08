import { LocalNotifications } from '@capacitor/local-notifications';

class Notifications {
  public async schedule(id: number, hour: number, minute: number) {
    try {
      const result = await LocalNotifications.listChannels();
      if (result.channels.find(ch => ch.id === 'alarm') === undefined) {
        await LocalNotifications.createChannel({
          id: 'alarm',
          name: 'Alarm',
          sound: 'alarm.wav',
          lightColor: '#f49c21',
          importance: 5,
          visibility: 1,
          vibration: true,
          lights: true
        });
      }

      // Clear old notifications in prep for refresh (OPTIONAL)
      const pending = await LocalNotifications.getPending();
      if (pending.notifications.length > 0)
        await LocalNotifications.cancel(pending);

      await LocalNotifications.schedule({
        notifications: [{
          title: 'Tanpa Pintu',
          body: 'Alarm',
          id: id,
          schedule: {
            allowWhileIdle: true,
            on: { // swap this out for at or every as needed
              hour,
              minute
            }
          },
          channelId: 'alarm'
        }]
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Notifications()