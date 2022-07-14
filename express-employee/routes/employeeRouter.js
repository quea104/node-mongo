const express = require('express');
const Employees = require('../models/Employees');
const router = express.Router();

// server-side routing
// /api/v1/employees/
router.get('/', async (req, res) => {
    // 1. 
    // 2. 데이터 응답 - json 형태

    try {
        const employees = await Employees.find({});
        res.json(employees);
    } catch(err) {
        res.json(err);
    }
});

// /api/v1/employees/:empId
router.get('/:empId', async (req, res) => {
    try {
        // empId 를 확보해서 몽고디비에 조회한 후 데이터를 반환
        const employee = await Employees.findOne({id: req.params.empId});
        console.log('직원 열람');
        res.json(employee);
    } catch(err) {
        res.json(err);
    }
});

// /api/v1/employees/
// Postman(Desktop app) > Body > raw > JSON
/*
{
    "id": 2,
    "name": "kim",
    "addr": {
    	"city": "jeonju",
		"detail": "yyy"
	},
    "position": "부사장"
}
*/
router.post('/', async (req, res) => {
    try {        
        // 1. 데이터를 클라이언트에서 전달
        // 2. 그 데이터를 받아서 DB에 저장
        console.log('직원 등록');

        const saved = await Employees.create(req.body);
        res.json(saved);
    } catch(err) {
        res.json(err);
    }
});

// /api/v1/employees/
router.put('/', (req, res) => {
    res.json('직원 수정')
});

// /api/v1/employees/:empId
router.delete('/:empId', (req, res) => {
    res.json('직원 삭제')
});

module.exports = router;
