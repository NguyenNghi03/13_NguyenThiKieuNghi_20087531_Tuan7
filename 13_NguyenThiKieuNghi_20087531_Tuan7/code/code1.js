import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
} from "react-native";

export default function code1({ navigation }) {
    var [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://65473f5f902874dff3ac13cc.mockapi.io/donut")
            .then((response) => response.json())
            .then((json) => {
                console.log(data);
                setData(json);
            });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, marginLeft: "15px" }}>
                <Text
                    style={{
                        fontFamily: "Roboto",
                        fontSize: "16px",
                        lineHeight: "18,75px",
                    }}
                >
                    Welcome, Jala!
                </Text>
            </View>
            <View style={{ flex: 1, marginLeft: "15px" }}>
                <Text
                    style={{
                        fontFamily: "Roboto",
                        fontSize: "20px",
                        lineHeight: "18,75px",
                        fontWeight: 700,
                    }}
                >
                    Choice you Best food
                </Text>
            </View>
            <View style={{ flex: 1, marginLeft: "15px" }}>
                <TextInput
                    placeholder="Search food"
                    style={{
                        padding: 5,
                        width: 226,
                        height: 46,
                        borderWidth: "1px",
                        borderRadius: "3px",
                        borderRadius: "5px",
                    }}
                ></TextInput>
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: "10px",
                }}
            >
                <Pressable
                    style={{
                        width: "100px",
                        height: "33px",
                        borderWidth: "2px",
                        borderRadius: "6px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Roboto",
                            fontSize: "14px",
                            lineHeight: "16,41px",
                            fontWeight: 700, textAlign: "center"
                        }}
                    >
                        Donut
                    </Text>
                </Pressable>
                <Pressable
                    style={{
                        width: "100px",
                        height: "33px",
                        borderWidth: "2px",
                        borderRadius: "6px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Roboto",
                            fontSize: "14px",
                            lineHeight: "16,41px",
                            fontWeight: 700, textAlign: "center"
                        }}
                    >
                        Pink Donut
                    </Text>
                </Pressable>
                <Pressable
                    style={{
                        width: "100px",
                        height: "33px",
                        borderWidth: "2px",
                        borderRadius: "6px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Roboto",
                            fontSize: "14px",
                            lineHeight: "16,41px",
                            fontWeight: 700, textAlign: "center"
                        }}
                    >
                        Floating
                    </Text>
                </Pressable>
            </View>

            {data.map((item, index) => {
                return (
                    <View
                        style={{
                            flex: 4,
                            flexDirection: "row",
                            backgroundColor: "pink",
                            marginVertical: "11px",
                            borderRadius: "11px",
                            width: "381px",
                            height: "116px",
                            marginLeft: "26px",
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: "51px",
                            }}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: "100px", height: "100px", marginLeft: "22px" }}
                            ></Image>
                        </View>
                        <View
                            style={{ flex: 3, marginLeft: "80px", justifyContent: "center" }}
                        >
                            <Text style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>{item.name}</Text>
                            <Text style={{ fontFamily: "Roboto", fontSize: "15px", lineHeight: "17,58px" }}>{item.discription}</Text>
                            <Text style={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: 700, lineHeight: "23,44px" }}>{item.price}</Text>
                        </View>
                        <Pressable
                            key={index}
                            onPress={() => {
                                navigation.navigate("code2", {
                                    image: item.image,
                                    name: item.name,
                                    price: item.price,
                                    discription: item.discription,
                                });
                            }}
                            style={{
                                flex: 1,
                                alignItems: "flex-end",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Image
                                source={require("../assets/plus_button.png")}
                                style={{ width: "44px", height: "45px" }}
                            ></Image>
                        </Pressable>
                    </View>
                );
            })}
        </View>
    );
}
