import express from "express";
const router = express.Router();
/*
Request
* */
let responseObject = {
    msg: "",
    result: ""
}

router.get("/getData",  (req, res) => {
    let result = Number(req.query.key1) + Number(req.query.key2);
    res.send({ sum:result })
});

router.get("/getTriangle",  (req, res) => {
    let result = (1/2)*Number(req.query.base) * Number(req.query.height);
    res.send({ triangleArea: result })
});

router.get("/getBMI",  (req, res) => {
    let result = (req.query.weight)/((req.query.height)/100*(req.query.height)/100);
    let msg;
    if(result>25){
        msg = "Fat"
    }else if(result==25){
        msg = "Normal"
    }else if(result<25){
        msg = "thin"
    }
    result = Number(result.toFixed(2));
    res.send({ BMI : result , msg: msg })
});
/*
Request
* */
router.post("/postData",async  (req, res) => {
    responseObject = {
        msg: "",
        result: ""
    }
    if(!req.body.key){
        responseObject.msg = "Bad request";
    }else{
        responseObject.msg = "success";
        responseObject.result = req.body.key * 5;
    }
    res.send(responseObject);
});

module.exports = router;
