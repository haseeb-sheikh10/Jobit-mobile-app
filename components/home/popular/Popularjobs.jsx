import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { useFetch } from "@/hooks/useFetch";
import PopularJobCard from "@/components/common/cards/popular/PopularJobCard";
import { SIZES } from "@/constants";

const Popularjobs = () => {
  const router = useRouter();

  const { loading, data, error, refetch } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  console.log(error);

  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{
              columnGap: SIZES.medium,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
