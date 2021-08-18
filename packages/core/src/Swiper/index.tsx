import React, { useState, useEffect, useRef, useCallback, } from 'react'
import { StyleSheet, View, Image } from 'react-native';
export interface dataSourceType {
    url: string
    // onClick?: () => void
}
export interface SwiperProps {
    dataSource: dataSourceType[];
    time?: number;
    width?: number;
    height?: number;
    autoplay?: boolean
}
const Swiper = (porps: SwiperProps) => {
    const { dataSource = [], time = 3000, autoplay = true, width = "100%", height = 130 } = porps
    let [curIndex, setCurIndex] = useState(0)
    let timer = useRef<NodeJS.Timeout | undefined>();
    const autoPlay = useCallback(() => {
        clearInterval(timer.current as unknown as number);
        timer.current = setInterval(() => {
            if (curIndex === dataSource.length - 1) {
                setCurIndex(0);
            } else {
                setCurIndex(curIndex + 1);
            }
        }, time);
    }, [dataSource, curIndex]);
    useEffect(() => {
        if (autoplay) {
            autoPlay()
        }
    }, [autoPlay]);
    useEffect(() => {
        return () => {
            clearInterval(timer.current as unknown as number);
        };
    }, []);
    return (
        <View style={StyleSheet.flatten([styles.box, { height }])}>
            <View style={StyleSheet.flatten([styles.banner, { width }])}>
                <View style={StyleSheet.flatten([styles.bannerOut, { marginLeft: curIndex * -100 + '%' }])}>
                    {dataSource.map((item: any, index: number) => {
                        return <Image style={styles.tinyLogo} key={index} source={{
                            uri: item.url,
                        }} />
                    })}
                </View>
                <View style={styles.dotBox}>
                    {dataSource.map((_: any, index: number) => {
                        return <View key={index} style={StyleSheet.flatten([styles.dot, index === curIndex ? styles.dotSetColor : styles.dotColor])} />
                    })}
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    box: {
        margin: 12,
        height: 130,
    },
    banner: {
        width: "100%",
        borderRadius: 25,
        position: "relative",
        overflow: "hidden",
    },
    bannerOut: {
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 0
    },
    tinyLogo: {
        width: "100%",
        height: "100%",
    },
    dotBox: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        position: "absolute",
        bottom: 12
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 12,
        marginRight: 12
    },
    dotColor: {
        backgroundColor: "lightgray",
    },
    dotSetColor: {
        backgroundColor: "red",
    }
});
export default Swiper