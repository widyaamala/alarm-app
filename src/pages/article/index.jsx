import { useEffect, useState, useCallback  } from "react";
import {
  Badge,
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component"
import useQueryFetch from "../../services/queries";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1)
  const [totalData, setTotalData] = useState(10)
  const [articles, setArticles] = useState([])
  
  const { data, isLoading } = useQueryFetch.getArticles({ _limit: 10, _page: page })

  const fetchMoreArticles = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    if (data) {
      setArticles((prevArticles) => [...prevArticles, ...data?.data])
      setTotalData(Math.ceil(data?.total / 10))
    }
  }, [data])

  return (
    <>
      {isLoading && !articles?.length ? (
        <HStack w="100%" gap="3" my="2">
          <Skeleton w="35%" h="85px" />
          <SkeletonText w="65%" h="85px" noOfLines={4} />
        </HStack>
      ) : (
        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreArticles}
          scrollableTarget="wrapper-content"
          hasMore={page - 1 < totalData}
          loader={
            <HStack w="100%" gap="3" my="2">
              <Skeleton w="35%" h="85px" />
              <SkeletonText w="65%" h="85px" noOfLines={4} />
            </HStack>
          }
          endMessage={
            <HStack>
              You have seen it all
            </HStack>
          }
        >
          {articles?.map((item, index) => (
            <HStack
              w="100%"
              gap="3"
              key={index}
              my="5"
              onClick={() => navigate(`/article/${item.title}`)}
            >
              <Box w="35%" h="85px" position="relative">
                <Image
                  className="smooth-shadow"
                  w="100%"
                  h="100%"
                  src={item?.thumbnail ?? "https://dummyimage.com/80x60"}
                  alt="img-article"
                  objectFit="cover"
                  borderRadius="8px"
                />
                <Badge
                  className="glass-background"
                  position="absolute"
                  top="6px"
                  left="6px"
                  fontSize="8px"
                  p="1"
                  textTransform="capitalize"
                >
                  Category
                </Badge>
              </Box>
              <VStack h="100%" alignItems="start" w="65%">
                <Text textStyle="semi" fontSize="14px" noOfLines={3}>
                  {item.title}
                </Text>
                <Text
                  textStyle="light"
                  fontSize="10px"
                  mt="auto"
                  color="darkgray"
                >
                  {moment(item.pubDate).format("DD MMMM YYYY")}
                </Text>
              </VStack>
            </HStack>
          ))}
        </InfiniteScroll>
      )}
    </>
  );
};

export default Index;
