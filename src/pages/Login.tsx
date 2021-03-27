import React, {FC, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;


const Login: FC = ({navigation}: any) => {
  const [email, setEmail] = useState('user@gmail.com');
  const [password, setPassword] = useState('123456');

  const onLoginPress = () => {
    console.log(email, password);

    navigation.navigate('Dashboard');
  };

  return (
  
      <ImageBackground source={{uri:"https://verilymag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTMzODQwNzkyNTQzMzA4NDE5/dating-casuallyjpg.jpg"}} style={styles.image}>
        <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 30}}>
          Login
        </Text>
        <View style={{marginTop: 20}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TextInput
              style={styles.textInput}
              onChangeText={value => setEmail(value)}
              value={email}
              placeholder="Email"
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <TextInput
              style={styles.textInput}
              onChangeText={value => setPassword(value)}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 15,
            }}>
            <TouchableOpacity style={styles.loginBtn} onPress={onLoginPress}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    
  );
};

export default Login;

const styles = StyleSheet.create({
  loginText: {
    color: '#F5F5F5',
  },
  loginBtn: {
    height: Deviceheight / 15,
    width: Devicewidth / 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5566D',
    padding: 10,
    elevation: 7,
    borderRadius: 10,
    marginTop: 20,
  },
  textInput: {
    height: Deviceheight / 15,
    width: Devicewidth / 1.3,
    padding: 10,
    borderColor: '#747474',
    borderWidth: 0.9,
    borderRadius: 10,
    fontSize: 16,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
