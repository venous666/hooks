import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function App() {

  const [name, Setname] = React.useState('');
  const [user, Setuser] = React.useState('');
  const [senha, Setsenha] = React.useState('');
 const [email, setEmail] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [idioma, setIdioma] = React.useState('');
    const [showInfo, setShowInfo] = useState(false);

    function handleLogin(){
      console.log(name)
      console.log(user)
      console.log(senha)
      console.log(email)
      console.log(cpf)
      console.log(idioma)
    }

    <view style={styles.infos}>
      <text style={styles.text}> Nome: {name }</text>
      <Text style={styles.text}>Usuário: {user}</Text>
          <Text style={styles.text}>Senha: {senha}</Text>
          <Text style={styles.text}>E-mail: {email}</Text>
          <Text style={styles.text}>CPF: {cpf}</Text>
          <Text style={styles.text}>Idioma do currículo: {idioma}</Text>
      
    </view>
  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <TextInput placeholder='Nome' style={styles.input} value= {name} onChangeText={Setname}></TextInput>
      <TextInput placeholder='User' style={styles.input} value= {user} onChangeText={Setuser}></TextInput>
      <TextInput placeholder='User' style={styles.input} value= {senha} onChangeText={Setsenha}></TextInput>
      <TextInput placeholder='User' style={styles.input} value= {email} onChangeText={setEmail}></TextInput>
      <TextInput placeholder='User' style={styles.input} value= {cpf} onChangeText={setCpf}></TextInput>
      <TextInput placeholder='User' style={styles.input} value= {idioma} onChangeText={setIdioma}></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textoButton} onPress={() =>{handleLogin(); setShowInfo(true)}}>Cadastrar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <View style={styles.infos}>
          <Text style={styles.text}>Nome: {name}</Text>
          <Text style={styles.text}>Usuário: {user}</Text>
          <Text style={styles.text}>Senha: {senha}</Text>
          <Text style={styles.text}>E-mail: {email}</Text>
          <Text style={styles.text}>CPF: {cpf}</Text>
          <Text style={styles.text}>Idioma do currículo: {idioma}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infos:{
    marginTop: 20,
    alignItems: 'center',
    color:'black',
    display:'flex',
    textAlign:'left'
  },
  text:{
    fontSize: 16,
    marginBottom: 5,
  },
  input:{
    width:200,
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#9c9c9c',
    borderRadius:3,
    marginBottom:5,
  },
  button:{
    width:200,
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'#4285f4',
    marginTop:15,
    borderWidth:2,
    borderColor:'#8ecafc'

  },
  textoButton:{
    fontSize:16,
    fontWeight:'bold',
    color:'#FFF'
  },
});
