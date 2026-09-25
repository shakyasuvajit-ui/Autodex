import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from "react-native-safe-area-context";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
    },
    headerContainer:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding:20
    },  
    headerText:{
        fontSize: 20,
        fontWeight: "600",
        color: "#ffffff",
        paddingLeft:24
    },
    cameraContainer:{
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0356C5',
    },
    uploadContainer:{

    },
    imageCapture:{
        height:220,
        width:322,
        borderRadius:20,
        borderWidth:1,
        borderColor:"#0356C5",
        borderStyle:"dashed",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:20
    },
    uploadText:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#ffffff",
        paddingTop:24
    },
    galleryUpload:{
        borderRadius:26,
        borderWidth:1,
        borderColor:"#0356C5",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        flexDirection:"row",
        gap:12, 
        width:322, 
        height:52,
        marginTop:16,
    },
    galleryText:{
        fontSize: 15,
        fontWeight: "600",
        color: "#ffffff"
    },
    dataEntry:{
        marginTop:38,
        width:322,
        alignSelf:"center",
    },
    dataEntryHeader:{
        fontSize: 18,
        fontWeight: "500",
        color: "#ffffff",
    },
    typeSelect:{
        flexDirection: "row",
        gap: 12,
        marginBottom: 16,   
        width: 322,
    },
    selectType:{
        borderRadius:25,
        borderWidth:1,
        borderColor:"#333333",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        gap:8,
        flex:1, 
        height:50,
    },
    selectTypeText:{
        fontSize: 15,
        fontWeight: "600",
        color: "#ffffff"
    },
    selectActive:{
        backgroundColor: "#0356C5",
        borderColor: "#0356C5",
    }

});
export default function VehicleEntry() {
    const [selectedType, setSelectedType] = useState<"Car" | "Bike">("Car");

    return (
        <View style={styles.container}>
            <SafeAreaView>
                {/* <BackButton type="light" /> */}
            <View style={styles.headerContainer}>
                <View style={styles.cameraContainer}>
                    <FontAwesome name="camera" size={24} color="#ffffff"/>
                </View>
                <Text style={styles.headerText}>Vehicle Entry</Text>
            </View>
            <View style={styles.uploadContainer}>
                <View style={styles.imageCapture}>
                    <View style={styles.cameraContainer}>
                        <MaterialCommunityIcons name="camera-control" size={24} color="#ffffff" />                
                    </View>
                    <Text style={styles.uploadText}>Click to capture the vehicle</Text>
                </View>
                <View style={styles.galleryUpload}>
                    <FontAwesome5 name="images" size={24} color="#ffffff" />
                    <Text style={styles.galleryText}>Click to add from gallery</Text>
                </View>
                <View style={styles.dataEntry}> 
                    <View style={{width:322, marginBottom:16}}>
                        <Text style={styles.dataEntryHeader}>Vehicle Information</Text>
                        <Text style={{fontSize: 14, fontWeight: "500", color:'#ffffff', marginTop: 8}}>Vehicle Type</Text>
                    </View>
                    <View style={styles.typeSelect}>
                        <TouchableOpacity 
                            style={[styles.selectType, selectedType === "Car" && styles.selectActive]}
                            onPress={() => setSelectedType("Car")}
                            activeOpacity={0.7}
                        >
                            <FontAwesome5 name="car" size={18} color="#ffffff" />
                            <Text style={styles.selectTypeText}>Car</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.selectType, selectedType === "Bike" && styles.selectActive]}
                            onPress={() => setSelectedType("Bike")}
                            activeOpacity={0.7}
                        >
                            <FontAwesome5 name="motorcycle" size={18} color="#ffffff" />
                            <Text style={styles.selectTypeText}>Bike</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </SafeAreaView>
        </View>
    )
}
