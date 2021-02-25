import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import styles from './style';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function App() {
return (
    <View style={styles.bg}>

{/* layer1 */}
        <View>
            <View style={styles.up}>

                <TouchableOpacity style={styles.arrow1}>
                    <Image source={require('../icon/left-arrow.png')} style={styles.arrow} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.trash}>
                    <Image source={require('../icon/delete-button-1.png')} style={styles.delete} />
                </TouchableOpacity>

            </View>
        </View>

        <View style={styles.shop1}>
            <Text style={styles.shop}>Cart</Text>
        </View>

{/* layer2 */}
        <View style={styles.box}>
            <View style={styles.box1}>
                
                    <View style={styles.api}>
                        <Image source={require('../icon/firecracker.png')} style={styles.api1}/>
                    </View>

                    <View style={styles.tulisan}>
                        <Text style={styles.cracker2}>FireCrackers</Text>
                        <Text style={styles.tulisan1}> $ 30.00</Text>
                    </View>

                    <View style={styles.tambah}>
                        <TouchableOpacity style={styles.minus1}>
                            <Image source={require('../icon/minus-sign.png')} style={styles.minus}/>
                        </TouchableOpacity>
                        
                        <Text style={styles.satu}>3</Text>
                        
                        <TouchableOpacity style={styles.plus1}>
                            <Image source={require('../icon/add.png')} style={styles.plus}/>
                        </TouchableOpacity>

                    </View>

                    
            
            </View>

            <View style={styles.box1}>
                
                    <View style={styles.apimoon1}>
                        <Image source={require('../icon/moon-cake.png')} style={styles.apimoon}/>
                    </View>

                    <View style={styles.tulisan}>
                        <Text style={styles.cracker21}>Moon Cake</Text>
                        <Text style={styles.tulisan1}> $ 30.00</Text>
                    </View>

                    <View style={styles.tambah}>
                        <TouchableOpacity style={styles.minus1}>
                            <Image source={require('../icon/minus-sign.png')} style={styles.minus}/>
                        </TouchableOpacity>
                        
                        <Text style={styles.satu}>3</Text>
                        
                        <TouchableOpacity style={styles.plus1}>
                            <Image source={require('../icon/add.png')} style={styles.plus}/>
                        </TouchableOpacity>

                    </View>

                    
            
            </View>

            <View style={styles.box1}>
                
                    <View style={styles.apilan1}>
                        <Image source={require('../icon/lantern.png')} style={styles.apilan}/>
                    </View>

                    <View style={styles.tulisan}>
                        <Text style={styles.cracker2}>Red Lantern</Text>
                        <Text style={styles.tulisan1}> $ 30.00</Text>
                    </View>

                    <View style={styles.tambah}>
                        <TouchableOpacity style={styles.minus1}>
                            <Image source={require('../icon/minus-sign.png')} style={styles.minus}/>
                        </TouchableOpacity>
                        
                        <Text style={styles.satu}>3</Text>
                        
                        <TouchableOpacity style={styles.plus1}>
                            <Image source={require('../icon/add.png')} style={styles.plus}/>
                        </TouchableOpacity>

                    </View>

                    
            
            </View>

            

        </View>
{/* layer3 */}

        <View style={styles.deliver}>
            <View style={styles.delivery}>
                <Text style={styles.del}>Delivery Services :</Text>
            </View>
            <View style={styles.delivery1}>
                <Text style={styles.del1}> $ 90.00</Text>
            </View>
        </View>
{/* layer4 */}
        <View style={styles.checkout}>
            <View style={styles.total}>
                <Text style={styles.total1}>Total Price</Text>
                <Text style={styles.total1}>$360.00</Text>
            </View>
            <TouchableOpacity style={styles.cekout}>
                <Text style={styles.cekout1}>CheckOut</Text>
            </TouchableOpacity>
        </View>

        </View>
);
}

