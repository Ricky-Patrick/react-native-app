import { StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    bg: {
    flex:1 ,
    backgroundColor: '#FFF5B8',
    },
    sebar:{
        position:'relative',
        flex:1,
    },
    search: {
        borderWidth: 1,
        borderRadius:10,
        borderColor:'#e8e8e8',
        height:40,
        fontSize:height * 0.019,
        paddingLeft:15,
        paddingRight:40,
        backgroundColor:'white',
        width:280
    },
    loupe: {
        position:'absolute',
        right:20,
        top:11,
    },
    layer2: {
        marginHorizontal:17,
        flexDirection:'row',
        marginTop:25
        
    },
    filter :{
        height : 40,
        width : 38,
        
    },
    filterdiv :{
        width:35,
        alignItems:'center',
        justifyContent:'center',
    },
    layer1 :{
        marginTop:30,
        paddingTop:15,
        marginHorizontal:17,
        flexDirection:'row',
    },
    menu :{
        width:15,
        height:15,
    },
    but :{
        width:35,
        height:35,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    men :{
        width:30,
        alignItems:'center',
    },
    atas1 :{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    home :{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:25
    },
    home1 :{
        fontSize:height * 0.025,
        fontWeight:'bold'
    },
    rounded :{
        justifyContent:'center',
        alignItems:'center'
    },
    profile :{
        height:35,
        width:35,
        borderRadius:50/2
    },
    propile :{
        flexDirection:'row',
        alignItems:'center'
    },
    cart :{
        paddingRight:10
    },
    bag :{
        marginRight:10
    },
    layer3 :{
        backgroundColor:'#E6312A',
        marginTop:20,
        flexDirection:'row',
        borderRadius:15,
        height:150,
        justifyContent:'center',
        alignItems:'center',
    },
    cb :{
        marginHorizontal:17,
    },
    diskon :{
        backgroundColor:'white',
        height:100,
        width:100,
        alignItems:'center',
        borderRadius:10,
        marginLeft:20,
        justifyContent:'center'
    },
    opacity :{
        opacity:.6,
        color:'black',
        fontSize:height * 0.013,
        opacity:.4
    },
    lantern :{
        marginRight:20
    },
    six :{
        fontSize:height * 0.032,
        opacity:.8
    },
    off :{
        fontSize:height * 0.032,
        opacity:.8
    },
    layer4 :{
        marginTop:25,
        marginLeft:17,
        flexDirection:'row',
        
    },
    all :{
        backgroundColor:'white',
        height:45,
        borderRadius:10,
        justifyContent:'center',
        width:80,
        flexDirection:'row',
        alignItems: 'center',

    },
    shirt :{
        backgroundColor:'white',
        height:45,
        borderRadius:10,
        justifyContent:'center',
        width:100,
        flexDirection:'row',
        alignItems: 'center',
        marginLeft:15,
        marginRight: 15,
    },
    hat :{
        backgroundColor:'white',
        height:45,
        borderRadius:10,
        justifyContent:'center',
        width:90,
        flexDirection:'row',
        alignItems: 'center',
        marginLeft:1
    },
    book :{
        backgroundColor:'white',
        height:45,
        borderRadius:10,
        justifyContent:'center',
        width:100,
        flexDirection:'row',
        alignItems: 'center',
        marginHorizontal:15
    },
    all1 :{
        height:15,
        width:15,
    },
    all2 :{
        paddingLeft:20,
        color:'#E6312A'
    },
    shirt1 :{
        height:15,
        width:15
    },
    shirt2 :{
        paddingLeft:20
    },
    hat1 :{
        height:15,
        width:15
    },
    hat2 :{
        paddingLeft:20
    },
    book1 :{
        height:15,
        width:15
    },
    book2 :{
        paddingLeft:20
    },
    layer5 :{
        marginTop:20
    },
    popul:{
        marginHorizontal:17,
        marginTop:-28
    },
    popular :{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:25
    },
    popular1 :{
        fontSize:height * 0.027,
        fontWeight:'bold',
        opacity:.8,
        paddingBottom:20
    },
    popular2 :{
        fontSize:height * 0.015,
        paddingTop:13,
        color:'#E6312A'
    },
    populer :{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    fire :{
        backgroundColor:'#F19290',
        height:210,
        marginTop:10,
        width:155,
        borderRadius:10,
    },
    fire1 :{
        backgroundColor:'white',
        height:15,
        width:45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        marginTop:10,
        marginLeft:10
    },
    fire2 :{
        color:'#E6312A',
        fontSize:height * 0.012
    },
    cracker :{
        height:120,
        alignItems: 'center',
        marginTop:5,
    },
    cracker1 :{
        width:100,
        height:120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    crack :{
        alignItems:'center',
    },
    crack1 :{
        width:140,
        height:50
    },
    cracker2 :{
        fontSize:17,
        fontWeight:'bold',
        color:'#E6312A'
    },
    cracks :{
        fontSize:height * 0.025,
        color:'#FFE24F',
        fontWeight:'bold'
    },
    moon :{
        backgroundColor:'#E49F52',
        height:210,
        marginTop:10,
        width:155,
        borderRadius:10,
    },
    moon1 :{
        backgroundColor:'white',
        height:15,
        width:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        marginTop:10,
        marginLeft:10
    },
    moon2 :{
        color:'#A36017',
        fontSize: height * 0.012
    },
    layer6 :{
        marginTop:20
    },
    angpao :{
        flexDirection:'row',
        marginTop:10,
        height:126,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:20
    },
    angpao1 :{
        backgroundColor:'#C21C16',
        height:128,
        width:90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20

    },
    angpao2 :{
        backgroundColor:'white',
        height:95,
        width:236,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    nali :{
        flexDirection:'row',
    },
    nalai :{
        marginLeft:15,
        fontSize:height * 0.025,
        fontWeight:'bold',
        color:'#C21C16',
        marginTop:20
    },
    heart :{
        marginLeft:78,
        marginTop:10
    },
    price :{
        paddingLeft:15,
    },
    harga :{
        fontSize:height * 0.026,
        color:'#FAA724',
        fontWeight:'bold'
    },
    popular12 :{
        fontSize:height * 0.027,
        fontWeight:'bold',
        opacity:.8
    },
    populer1 :{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    env :{
        backgroundColor:'#F5AC9B',
        height:210,
        marginTop:10,
        width:155,
        borderRadius:10,
    },
    candle :{
        backgroundColor:'#FBC792',
        height:210,
        marginTop:10,
        width:155,
        borderRadius:10,
    },
    relen :{
        backgroundColor:'#FE7058',
        height:210,
        marginTop:10,
        width:155,
        borderRadius:10,
        marginBottom:20
    },
    sakura :{
        backgroundColor:'#9A807F',
        height:210,
        marginTop:10,
        width:155,
        borderRadius:10,
        marginBottom:20
    },
    arrow :{
        backgroundColor:'white',
    },
    up :{
        marginTop:60,
        justifyContent:'space-between',
        flexDirection:'row',
        height:30,
        alignItems: 'center',
        marginHorizontal:17
        
    },
    arrow :{
        height:15,
    },
    arrow1 :{
        height:25,
        width:40,
        alignItems:'center',
        justifyContent:'center',
    },
    shop :{
        fontSize:height * 0.03,
        fontWeight:'bold',
        opacity:.8,
    },
    shop1 :{
        marginHorizontal:17,
        marginTop:20,
    },
    trash :{
        height:30,
        width:30,
        justifyContent:'center',
        alignItems:'center',
    },
    box :{
        backgroundColor:'#FBF2CD',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:20
    },
    box1 :{
        backgroundColor:'white',
        flexDirection:'row',
        width:327,
        height:87,
        justifyContent:'space-around',
        borderRadius:15,
        marginTop:20,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowRadius: 2
    },
    tambah :{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        width:100,
        left:5
    },
    api :{
        justifyContent: 'center',
        alignItems:'center',
        left:15
    },
    apimoon :{
        height:80,
        width:80
    },
    apimoon1 :{
        justifyContent: 'center',
        alignItems:'center',
        left:5,
    },
    apilan :{
        height:80,
        width:80
    },
    apilan1 :{
        justifyContent: 'center',
        alignItems:'center',left:5
    },
    api1 :{
        height:80,
        width:67
    },
    tulisan :{
        justifyContent: 'center',
        alignItems:'center',
        left:15,
        width:100,
    },
    tulisan1 :{
        fontSize:height * 0.025,
        color:'#FFE24F',
        fontWeight:'bold',
        right:20,
    },
    minus :{
        width:13
    },
    minus1 :{
        height:30,
        width:30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plus :{
        width:13,
        height:13
    },
    plus1 :{
        height:30,
        width:30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    satu :{
        fontSize:height * 0.03,
        color:'#F7F55C',
        paddingHorizontal:5
    },
    cracker21 :{
        fontSize:17,
        fontWeight:'bold',
        color:'#E6312A',
    },
});

export default (styles);
