import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { colors, formHeading, defaultStyle, inputOptions } from '../../styles/styles'
import { Avatar, Button, TextInput } from 'react-native-paper'

const categories=[
    {
        name: "Nice",
        _id: "Asass"
    },
    {
        name: "Nice2",
        _id: "Asassava"
    },
    {
        name: "Nice3",
        _id: "Asassavavava"
    },
    {
        name: "Nice4",
        _id: "Asasseeea"
    }
]
const Categories = () => {
    const [category,setCategory] = useState("");
    const deleteHandler=(id)=>{
        console.log(`deleting category with ID: ${id}`);
    }
    const submitHandler = () =>{

    }
    const loading = false
  return (
    
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <Header back={true}/>
        <View
        style={{
            marginBottom: 20,
            paddingTop: 70
        }}
        >
        <Text style={formHeading}>Caregories</Text>
    </View>
        
     <ScrollView style={{
        marginBottom: 20
     }}>
        <View style={{
            backgroundColor: colors.color2,
            padding: 20,
            minHeight: 400
        }}>
            {categories.map(i=>(
                <CategoryCard name={i.name} id={i._id} jey={i._id} deleteHandler={deleteHandler}/>
            ))}
        </View>
     </ScrollView>

     <View style={styles.container}>
            <TextInput
              {...inputOptions}
              placeholder="Category"
              value={category}
              onChangeText={setCategory}
            />
            <Button textColor={colors.color2} style={{
                backgroundColor: colors.color1,
                margin: 20,
                padding:6,
            }} disabled={!category} onPress={submitHandler} loading={loading}>
                Add
            </Button>
     </View>
    </View>
  )
}

const CategoryCard = ({name,id,deleteHandler})=> <View style={styles.cardContainer}>
    <Text style={styles.cardText}>{name}</Text>
    <TouchableOpacity onPress={()=>deleteHandler(id)}>
        <Avatar.Icon icon={"delete"} size={30} style={{
            backgroundColor: colors.color1
        }}/>
    </TouchableOpacity>
</View>

const styles = StyleSheet.create({

    container:{
        padding: 20,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: colors.color3
    },
    cardContainer: {
        backgroundColor: colors.color2,
        elevation: 5,
        margin: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    },
    cardText:{
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: 1,
    }
})
export default Categories