import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View , Dimensions, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function About(navigation) {
return (
    <View style={styles.bg}>
{/* layer1 */}
                <View style={styles.layer1}>
                    <View style={styles.atas1}>
                        
                            <TouchableOpacity style={styles.but}>
                                <View style={styles.men}>
                                    <Image source={require('../icon/menu(1).png')} style={styles.menu}/>
                                </View>
                            </TouchableOpacity>

                            <View style={styles.home}>
                                <Text style={styles.home1}></Text>
                            </View>

                            <View style={styles.rounded}>
                                <View style={styles.propile}>
                                    <TouchableOpacity style={styles.bag}  onPress={() => this.props.navigation.navigate('Cart')}>
                                        <Image source={require('../icon/shopping-bag.png')} style={styles.cart}/>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity style={styles.profile1}>
                                        <Image source={require('../icon/gmpg.jpg')} style={styles.profile}/>
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>

                    </View>
                </View>
{/* layer2 */}
                <View style={styles.layer2}>
                    <View style={styles.sebar}>
                        <TextInput placeholder="Search..." style={styles.search}/>
                        <Image source={require('../icon/loupe.png')} style={styles.loupe}/> 
                    </View>

                    <TouchableOpacity style={styles.filterdiv}>
                        <Image source={require('../icon/filter.png')} style={styles.filter} />
                    </TouchableOpacity>
                    
                </View>
{/* layer3 */}
                <ScrollView vertical showsVerticalScrollIndicator={false}>
                <View style={styles.layer5}>

                <View style={styles.popul}>

                    <View style={styles.popular}>
                        <Text style={styles.popular12}>Chinese Item</Text>
                    </View>

                    <View style={styles.populer1}>
                        
                        <TouchableOpacity style={styles.fire}>
                            
                            <View style={styles.fire1}>
                                <Text style={styles.fire2}>popular</Text>
                            </View>

                            <View style={styles.cracker}>
                                <View style={styles.cracker1}>
                                    <Image source={require('../icon/firecracker.png')}/>
                                </View>
                            </View>

                            <View style={styles.crack}>
                                <View style={styles.crack1}>
                                    <Text style={styles.cracker2}>FireCracker</Text>
                                    <Text style={styles.cracks}>$ 30.00</Text>
                                </View>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.moon}>
                            <View style={styles.moon1}>
                                <Text style={styles.moon2}>Best Sale</Text>
                            </View>

                            <View style={styles.cracker}>
                                <View style={styles.cracker1}>
                                    <Image source={require('../icon/moon-cake.png')}/>
                                </View>
                            </View>

                            <View style={styles.crack}>
                                <View style={styles.crack1}>
                                    <Text style={styles.cracker2}>MoonCake</Text>
                                    <Text style={styles.cracks}>$ 23.23</Text>
                                </View>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.env}>
                            <View style={styles.moon1}>
                                <Text style={styles.moon2}>Best Sale</Text>
                            </View>

                            <View style={styles.cracker}>
                                <View style={styles.cracker1}>
                                    <Image source={require('../icon/red-envelope.png')}/>
                                </View>
                            </View>

                            <View style={styles.crack}>
                                <View style={styles.crack1}>
                                    <Text style={styles.cracker2}>Red Envelope</Text>
                                    <Text style={styles.cracks}>$ 23.23</Text>
                                </View>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.candle}>
                            
                            <View style={styles.fire1}>
                                <Text style={styles.fire2}>popular</Text>
                            </View>

                            <View style={styles.cracker}>
                                <View style={styles.cracker1}>
                                    <Image source={require('../icon/candles.png')}/>
                                </View>
                            </View>

                            <View style={styles.crack}>
                                <View style={styles.crack1}>
                                    <Text style={styles.cracker2}>Candles</Text>
                                    <Text style={styles.cracks}>$ 30.00</Text>
                                </View>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.relen}>
                            
                            <View style={styles.fire1}>
                                <Text style={styles.fire2}>popular</Text>
                            </View>

                            <View style={styles.cracker}>
                                <View style={styles.cracker1}>
                                    <Image source={require('../icon/lantern.png')}/>
                                </View>
                            </View>

                            <View style={styles.crack}>
                                <View style={styles.crack1}>
                                    <Text style={styles.cracker2}>Red Lantern</Text>
                                    <Text style={styles.cracks}>$ 30.00</Text>
                                </View>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.sakura}>
                            <View style={styles.moon1}>
                                <Text style={styles.moon2}>Best Sale</Text>
                            </View>

                            <View style={styles.cracker}>
                                <View style={styles.cracker1}>
                                    <Image source={require('../icon/sakura.png')}/>
                                </View>
                            </View>

                            <View style={styles.crack}>
                                <View style={styles.crack1}>
                                    <Text style={styles.cracker2}>Sakura Tree</Text>
                                    <Text style={styles.cracks}>$ 23.23</Text>
                                </View>
                            </View>

                        </TouchableOpacity>

                    </View>

                </View>
                </View>
                </ScrollView>




            </View>
);
}


