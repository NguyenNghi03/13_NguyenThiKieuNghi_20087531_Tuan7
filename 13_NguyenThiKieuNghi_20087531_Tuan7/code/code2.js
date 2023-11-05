import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
export default function code2({ navigation }) {
    const rou = useRoute();
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "273px",
                    height: "279px",
                    marginLeft: "71px",
                }}
            >
                <Image
                    style={{ width: "273px", height: "279px" }}
                    source={rou.params?.image}
                />
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>
                    {rou.params?.name}
                </Text>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 20,
                    marginTop: "10px"
                }}
            >
                <Text style={{ fontFamily: "Roboto", fontSize: "20px", lineHeight: "17,58px" }}>
                    {rou.params?.discription}
                </Text>
                <Text style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>
                    {rou.params?.price}
                </Text>
            </View>

            <View
                style={{
                    marginVertical: 20,
                    paddingHorizontal: 20,
                    flexDirection: "row",
                    marginTop: "30px"
                }}
            >
                <Image
                    source={require("../assets/Vector.png")}
                    style={{ width: 25, height: 25 }}
                />
                <Text style={{ fontFamily: "Roboto", fontSize: "20px", lineHeight: "17,58px", paddingHorizontal: 20 }}>Delivery in</Text>
            </View>

            <View
                style={{
                    paddingHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>30 min</Text>
                <View style={{ flexDirection: "row" }}>
                    <Pressable
                        style={{
                            backgroundColor: "#F1B000",
                            width: 25,
                            height: 25,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>-</Text>
                    </Pressable>
                    <Text style={{ marginHorizontal: 10, fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>1</Text>
                    <Pressable
                        style={{
                            backgroundColor: "#F1B000",
                            width: "25px",
                            height: "25px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>
                    Restaurants info
                </Text>
                <Text style={{ fontFamily: "Roboto", fontSize: "15px", lineHeight: "17,58px", marginTop: "10px" }}>
                    Order a Large Pizza but the size is the equivalent of a medium/small
                    from other places at the same price range.
                </Text>
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: "50px" }}>
                <Pressable
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{
                        backgroundColor: "#F1B000",
                        height: 58,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>
                        Add to cart
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
