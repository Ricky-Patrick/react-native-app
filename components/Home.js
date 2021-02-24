import React from 'react';
import { StyleSheet, Text, View , Button, Dimensions, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Header extends React.Component{
    render() {
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
                                <Text style={styles.home1}>Home</Text>
                            </View>

                            <View style={styles.rounded}>
                                <View style={styles.propile}>
                                    <TouchableOpacity style={styles.bag} onPress={() => this.props.navigation.navigate('Cart')}>
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

                <View style={styles.cb}>
                    <TouchableOpacity style={styles.layer3}>

                        <View style={styles.lantern}>
                            <Image source={require('../icon/lantern.png')}/>
                        </View>

                        <View>
                            <View style={styles.diskon}>
                                <Text style={styles.opacity}>Get Special Price</Text>
                                <Text style={styles.six}>65%</Text>
                                <Text style={styles.off}>OFF</Text>
                            </View>

                        </View>

                    </TouchableOpacity>

                </View>
{/* layer4 */}
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.layer4}>

                            <TouchableOpacity style={styles.all}>
                                <Image source={require('../icon/menu(1).png')}  style={styles.all1}/>
                                <Text style={styles.all2}>All</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.shirt}>
                                <Image source={require('../icon/shirt.png')}  style={styles.shirt1}/>
                                <Text style={styles.shirt2}>T-Shirt</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.hat}>
                                <Image source={require('../icon/baseball-cap.png')}  style={styles.hat1}/>
                                <Text style={styles.hat2}>Hat</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.book}>
                                <Image source={require('../icon/book-of-black-cover-closed.png')}  style={styles.book1}/>
                                <Text style={styles.book2}>Book</Text>
                            </TouchableOpacity>
                    </ScrollView>

                </View>
{/* layer5 */}
                <View style={styles.layer5}>

                <View style={styles.popul}>

                    <View style={styles.popular}>

                        <Text style={styles.popular1}>Popular</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                            <Text style={styles.popular2}>All</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.populer}>
                        
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
                    </View>

                </View>
                </View>
{/* layer6 */}
                <View style={styles.layer6}>

                <View style={styles.popul}>
                    <View style={styles.popular}>

                        <Text style={styles.popular1}>Related</Text>
                            <TouchableOpacity>
                                <Text style={styles.popular2}>All</Text>
                            </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.angpao}>

                        <View style={styles.angpao1}>
                            <Image source={require('../icon/red-envelope-1.png')}/>
                        </View>

                        <View style={styles.angpao2}>
                            <View style={styles.nali}>
                                <Text style={styles.nalai}>Angpao na lai</Text>
                                <Image source={require('../icon/heart.png')} style={styles.heart}/>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.harga}>$ 30.00</Text>
                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.angpao}>

                        <View style={styles.angpao1}>
                            <Image source={require('../icon/red-envelope-1.png')}/>
                        </View>

                        <View style={styles.angpao2}>
                            <View style={styles.nali}>
                                <Text style={styles.nalai}>Angpao na lai</Text>
                                <Image source={require('../icon/heart.png')} style={styles.heart}/>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.harga}>$ 30.00</Text>
                            </View>
                        </View>

                    </TouchableOpacity>

                </View>

                </View>

            </ScrollView>
            </View>
        );
    }
}


