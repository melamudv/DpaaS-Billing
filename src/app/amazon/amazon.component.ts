import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import * as AWS from 'aws-sdk';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';

import { Http } from '@angular/http';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})

export class AmazonComponent implements OnInit {
  data:any;
  public totlaBalance : string;
  constructor
  (
    private http: Http,
    private ref: ChangeDetectorRef
  )
  {
    this.http    = http;

  }
  ngOnInit() {
    // this.getDataAmazon().then(() => console.log("Data",this.data));
    // this.getDataAmazon();
    var self = this;
      AWS.config.update({
        accessKeyId: "xxxx",
        secretAccessKey: "xxxxxx",
        region: "us-east-1"
      });
      var s3 = new AWS.S3();
      var getParams = {
        Bucket: 'dpaas-billing', // your bucket name,
        Key: 'report.csv' // path to the object you're looking for
      }

// Get a full object.
    s3.getObject(getParams, function(err, data) {
      // Handle any error and exit
      if (err)
        return err;

      // No error happened
      // Convert Body from a Buffer to a String

      let objectData  = data.Body.toString('utf-8'); // Use the encoding necessary
      self.totlaBalance = objectData;
      self.ref.detectChanges();
      this.data = objectData;
    });

  }





  //
  // getDataAmazon(){
  //   AWS.config.update({
  //     accessKeyId: "AKIAJQGKHNOQAMIDYGXA",
  //     secretAccessKey: "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",
  //     region: "us-east-1"
  //   });
  //   var s3 = new AWS.S3();
  //   var getParams = {
  //     Bucket: 'dpaas-billing', // your bucket name,
  //     Key: 'report.csv' // path to the object you're looking for
  //   }
  //   s3.getObject(getParams, function(err, data) {
  //     if (err){
  //       return err;
  //     }
  //     else{
  //       this.data = data.Body.toString('utf-8'); // Use the encoding necessary
  //       }
  //   });
  // }



  // getDataAmazon(){
  //   AWS.config.update({
  //     accessKeyId: "AKIAJQGKHNOQAMIDYGXA",
  //     secretAccessKey: "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",
  //     region: "us-east-1"
  //   });
  //   var s3 = new AWS.S3();
  //   var getParams = {
  //     Bucket: 'dpaas-billing', // your bucket name,
  //     Key: 'report.csv' // path to the object you're looking for
  //   };
  //   s3.getObject(getParams, function(err, data))
  //     .subscribe(data => {
  //       console.log("11111",data.Body.toString('utf-8'));
  //     })
  // }


}
