//
//  AppChanger.m
//  MartaRideOrSlide
//
//  Created by Macbook on 9/9/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "AppChanger.h"
#import <React/RCTLog.h>

@implementation AppChanger

RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(changeToLyft)
{
  
  NSURL *appURL = [NSURL URLWithString:@"lyft://"];
  
  [[UIApplication sharedApplication] openURL:appURL];
}

RCT_EXPORT_METHOD(changeToMaps:(NSString *)URL)
{


  NSURL *appURL = [NSURL URLWithString:URL];
  
  [[UIApplication sharedApplication] openURL:appURL];


}


@end
