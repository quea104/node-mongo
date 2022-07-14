const express = require('express');
const mongoose = require('mongoose');

// DB 접속 URI - connect your application 클릭
const uri = 'mongodb+srv://admin:admin@cluster0.rgjxd5t.mongodb.net/?retryWrites=true&w=majority';

// async 비동기로 코드 동작
const connectToMongo = async () => {
    try {
        // await 걸어서 동기처럼 코드 실행 완료 기다림
        const result = await mongoose.connect(uri);
        console.log('connection ok');
    } catch(err) {
        // 실패
        console.log('connection fail', err);
    }
}

/* // promise 함수
Mongoose.connect(uri)
    .then(() => {
        // 성공
        console.log('connection ok');
    }, err => {
        // 실패
        console.log('connection fail', err);
    }); */

module.exports = connectToMongo;