import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {
  objectData:any;
  dataAmazonBilling:any;
  constructor() { }
  ngOnInit() {
    AWS.config.update({
      accessKeyId: "AKIAILXKLRGU7GP23YMA",
      secretAccessKey: "ciS17fMJC5fr2uyzOK7MkqI5RHIX8akD4XqJJpYy",
      region: "us-east-1"
    });
    var s3 = new AWS.S3();
    var getParams = {
      Bucket: 'dpaas-billing', // your bucket name,
      Key: 'report.csv' // path to the object you're looking for
    }
    this.dataAmazonBilling = s3.getObject(getParams, function(err, data) {
      if (err){
        return err;
      }
      else{
        this.objectData = data.Body.toString('utf-8'); // Use the encoding necessary
        return this.objectData;
      }
    });
  }



}
