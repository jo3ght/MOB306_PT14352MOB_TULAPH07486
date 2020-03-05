import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  ImageBackground,
  Image
} from "react-native";
import BookItem from "./bookItem";

export default function ShowList({ Username }) {
  const bookList = {
    data: [
      {
        id: "01",
        image:
          "https://marketplace.canva.com/EADajpcXwvU/1/0/501w/canva-rust-orange-lioness-vintage-book-cover-2r7-sbV3ztw.jpg",
        name: "Lion In You",
        category: "Lifestyle",
        totalChapters: "30",
        isFull: true
      },
      {
        id: "02",
        image:
          "https://i.pinimg.com/originals/ec/15/b6/ec15b65a7949a38eea8906f9904357dc.jpg",
        name: "A Clock Orange",
        category: "Movie",
        totalChapters: "20",
        isFull: true
      },
      {
        id: "03",
        image:
          "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
        name: "Harry Potter",
        category: "Magic",
        totalChapters: "17",
        isFull: false
      },
      {
        id: "04",
        image:
          "https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-4741.jpg?itok=mClx7nHM",
        name: "The Over Cust",
        category: "Communism",
        totalChapters: "99",
        isFull: true
      },

      {
        id: "05",
        image:
          "https://www.moralmarkets.org/wp-content/uploads/karl-marx-capital.jpeg",
        name: "Karl Marx",
        category: "Tenet",
        totalChapters: "75",
        isFull: true
      },

      {
        id: "06",
        image:
          "https://d3525k1ryd2155.cloudfront.net/h/397/053/709053397.0.x.jpg",
        name: "History of Communism",
        category: "History",
        totalChapters: "90",
        isFull: true
      },
      {
        id: "07",
        image:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328823980l/6675452.jpg",
        name: "The Red Flag",
        category: "Communism",
        totalChapters: "29",
        isFull: true
      }
    ]
  };
  const [book, setBook] = useState(bookList);
  const [datas, setDatas] = useState(true);

  const handleDelete = id => {
    let newBookList = book.data;
    newBookList = newBookList.filter(data => data.id != id);
    bookList.data = newBookList;
    setBook(bookList);
    setDatas();
  };

  return (
    <View style={style.bg}>
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
      </ImageBackground>
      <View>
        <FlatList
          data={book.data}
          renderItem={({ item }) => (
            <BookItem item={item} handleDelete={handleDelete} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  ava: {
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
    height: 180,
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

