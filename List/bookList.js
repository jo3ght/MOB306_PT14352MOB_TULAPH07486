import React, { useState,useEffect,Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image,
  Switch,
} from "react-native";
import BookItem from "./bookItem";

export default function ShowList({ Username }) {
  const [showLoad, setShowLoading] = useState(false);
  const [name, setBookName] = useState('');
  const [category, setbookCategory] = useState('');
  const [chapters, setbookChapter] = useState('');
  const [imagebook, setbookImage] = useState('');
  const [isFull,setIsFull] = useState("");
  const [bookId, setBookID] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  



  const [showModal, setShowModal] = useState(false);


  const API = "https://5e63622af48bc60014536b58.mockapi.io/api/mybook";

  //call API from server JSON
  const fetchBooks = () => {
    return fetch(
      API,
      {}
    ).then((response) => response.json())
      .then((responseJson) => setBooks(responseJson))
      .catch((error) => console.log(error));
  };

  const setModalData = (data) => {
    setBookName(data.name);
    setbookChapter(data.chapters);
    setbookCategory(data.category);
    setIsFull(data.isFull);
    setbookImage(data.imagebook);
    setIsUpdate(data.id);
  }

  let cyka = "https://i.pinimg.com/564x/ba/95/d2/ba95d29aff1ee97605887c1af28c3418.jpg";

  const handleAddBook = (responseJson) => {
    const newBooks = [...books];
    return newBooks.push(responseJson);
  }

  const handleUpdateBook = (responseJson) => {
    const newBooks = [...books];

    const updateBookItem = newBooks.findIndex(item => item.id = responseJson.id);

    newBooks[updateBookItem] = responseJson;
    return newBooks;
  }


  const handleCancle = () => {
    setShowModal(false);
  }

  useEffect(() => {fetchBooks()}, [])

  const [books, setBooks] = useState([]);


  const handleDelete = (id) => {

    fetch(
      `${API}/${id}`,
      { method: 'DELETE' }
    ).then(() => fetchBooks())
      .catch((error) => console.log(error));
  };

  const handleSubmit = () => {
    setShowLoading(true);
    setShowModal(false);

    const book = {
      imagebook: cyka,
      name : name,
      category: category,
      chapters: chapters,
      isFull: isFull,
    };

    const api = isUpdate ? `${API}/${isUpdate}` : API;

    fetch(
      api,
      {
        method: isUpdate ? 'PUT' : 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
      }
    ).then((response) => response.json())
    .then((responseJson) => {
      let newBooks = [];
      if(isUpdate){
        newBooks = handleUpdateBook(responseJson);
      }
      else{
        newBooks = handleAddBook(responseJson);
      }
   
      setBooks(books);
      fetchBooks();
    })
    .catch((error) => console.log(error));

    setModalData({
      name: '',
      chapters:'',
      category:'',
      iFull:true,
      imagebook:'',
    });
    
  }

  const showEditModal = (id) => {
    const book = books.find((item) => item.id == id);

    setModalData(book);
    setShowModal(true);
  }

  return (
    <View>
      <ImageBackground
        imageStyle={{ borderRadius: 30 }}
        style={style.boxName}
        source={{
          uri:
            "https://i.pinimg.com/564x/ba/95/d2/ba95d29aff1ee97605887c1af28c3418.jpg"
        }}
      >
        <Image
          style={style.ava}
          source={{
            uri:
              "https://image2.baonghean.vn/w607/Uploaded/2019/esltmtysmyl/2018_03_22/3456323329_2232018.jpg"
          }}
        />
        <Text style={style.txtBoxName}>{Username}</Text>
        <TouchableOpacity
          style={style.btnAdd}
          onPress={() => setShowModal(true)}
        >
          <Text style={style.txt}>+</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View>
        <FlatList
          data={books}
          renderItem={({ item }) => (
            <BookItem item={item} handleDelete={handleDelete} showEditModal={showEditModal} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>


      <Modal visible={showModal}>
        <ImageBackground
          style={style.viewBg}
          source={{
            uri:
              "https://i.pinimg.com/564x/88/fb/62/88fb627b0397d9666e6ddba29b88c75f.jpg"
          }}
        >
          <View style={style.viewAddBook}>
            <Text style={style.textTile}>Add new book</Text>
            <Text style={style.titleInput}>Book Name: </Text>

            <TextInput
              value={name}
              onChangeText={(value) => setBookName(value)}
              placeholder="Harry Potter"
              style={style.input}
              keyboardType="default"
            />
            <Text style={style.titleInput}>Category: </Text>

            <TextInput
             value={`${category}`} 
              onChangeText={(value) => setbookCategory(value)}
              placeholder="Learning"
              style={style.input}
              keyboardType="default"
            />
            <Text style={style.titleInput}>Total chapters: </Text>

            <TextInput
              value={chapters}
              onChangeText={(value) => setbookChapter(value)}
              keyboardType="numeric"
              placeholder="368"
              style={style.input}
              keyboardType="default"
            />

            <Text style={style.titleInput}>Image Url: </Text>

            <TextInput
              value={cyka}
              onChangeText={(value) => setbookImage(value)}
              style={style.input}
              keyboardType="default"
            />

            <Text style={style.titleInput}>Full: </Text>
            <Switch
              style={style.btnSwitch}
              value={isFull}
              onValueChange={() => setIsFull(!isFull)}
            />

            <View style={style.viewBtn}>
              <TouchableOpacity
                style={style.btnGoBack}
                onPress={() => handleCancle()}
              >
                <Text numberOfLines={2} style={style.txtGoBack}>
                  Back
              </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={style.btnAddBookModal}
                onPress={() => handleSubmit()}
              >
                <Text numberOfLines={2} style={style.txtGoBack}>
                  Add
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Modal>

    
    </View>

  );

}

const style = StyleSheet.create({
  titleInput: {
    fontWeight: "bold",
    color: "#473051",
    fontWeight: "bold",
    fontSize: 15
  },
  viewBg: {
    width: '100%',
    height: '100%',
  },
  btnAddBookModal: {
    justifyContent: "center",
    height: 50,
    width: "45%",
    margin: 18,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#36abb5",
    backgroundColor: "#36abb5"
  },
  viewBtn: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnSwitch: {
    margin: 18,
  },
  input: {
    margin: 18,
    color: "black",
    marginTop: 16,
    height: 60,
    fontSize: 25,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fcf5e9',
    borderColor: "#fdfaf4",
    paddingHorizontal: 20
  },
  textTile: {
    marginBottom: 32,
    fontWeight: 'bold',
    fontSize: 35,
    color: "black",
    textAlign: "center",
  },
  viewAddBook: {
    margin: 16,
    flex: 1,
    marginTop: 16,
    justifyContent: 'center',
  },
  txtGoBack: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    textAlign: "center",
    alignItems: "center"
  },
  btnGoBack: {
    justifyContent: "center",
    height: 50,
    width: "45%",
    margin: 18,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#ea526f",
    backgroundColor: "#ea526f"
  },
  txt: {
    fontWeight: '900',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnAdd: {
    marginTop: 8,
    width: 150,
    height: 30,
    alignItems: "center",
    borderColor: "#FF847C",
    backgroundColor: "#FF847C",
    color: "#FF847C",
    borderRadius: 30,
    borderWidth: 1
  },
  ava: {
    marginTop: 32,
    borderWidth: 5,
    borderColor: "white",
    width: 120,
    height: 120,
    borderRadius: 70
  },
  txtBoxName: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  boxName: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    height: 200,
    margin: 8
  },
  imageBackground: {
    alignItems: "center",
    textAlign: "center",
    marginTop: 16,
    width: "100%",
    height: 150
  }
});

