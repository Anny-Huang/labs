"use client";
import vacationDestinations from "../../lib/vacationsDestinations";
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

type WikiData = {
  extract?: string;
  thumbnail?: { source: string };
};

export default function Lab4() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [wikiInfo, setWikiInfo] = useState<Record<number, WikiData>>({});

  const handleClick = async (id: number, city: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      if (!wikiInfo[id]) {
        try {
          const res = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
              city
            )}`
          );
          const data = await res.json();
          setWikiInfo((prev) => ({ ...prev, [id]: data }));
        } catch (error) {
          console.error("Error fetching wiki data:", error);
        }
      }
      setOpenId(id);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Vacation Destinations</Text>
      {vacationDestinations.map((dest) => (
        <View key={dest.id} style={styles.card}>
          <TouchableOpacity onPress={() => handleClick(dest.id, dest.location)}>
            <Text style={styles.city}>{dest.location}</Text>
          </TouchableOpacity>

          {openId === dest.id && (
            <View style={styles.details}>
              <Text style={{ color: "darkblue" }}>Price: ${dest.price}</Text>
              <Text style={{ color: "darkblue" }}>
                Average Temperature: {dest.average_yearly_temperature}
              </Text>

              {wikiInfo[dest.id]?.thumbnail?.source && (
                <Image
                  source={{ uri: wikiInfo[dest.id]?.thumbnail?.source }}
                  style={styles.image}
                />
              )}

              {wikiInfo[dest.id]?.extract && (
                <Text style={styles.description}>
                  {wikiInfo[dest.id].extract}
                </Text>
              )}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "lightpink",
  },
  header: {
    paddingTop: 15,
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    color: "darkblue",
  },
  card: {
    marginBottom: 20,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  city: {
    fontSize: 25,
    fontWeight: "600",
    color: "darkblue",
  },
  details: {
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 150,
    marginVertical: 15,
    borderRadius: 10,
    resizeMode: "cover",
  },
  description: {
    fontFamily: "Arial",
    fontStyle: "italic",
    color: "gray",
    lineHeight: 25,
  },
});
