//
//  ActionViewController.m
//  CustomDictionaryExtension
//
//  Created by Coty Embry on 3/7/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

//1. include the -ObjC in the "other linker flags"
//2. you must export a method so that you can call from JavaScript a method in Objective-C to be able to dismiss the action extension view
//3. I ran into an issue where I have to include a key in the Info.plist to allow certain http requests
//4. Make sure there are no errors in the React-Native files or - sometimes - the whole project won't compile
//5. Make sure to include the appropriate React-Native libraries in the Build Phases



#import "ActionViewController.h"
#import <MobileCoreServices/MobileCoreServices.h>
#import "RCTRootView.h"

@interface ActionViewController ()

@property(strong,nonatomic) IBOutlet UIImageView *imageView;

@end

@implementation ActionViewController

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(testing) {
  NSLog(@"testing was called");
  
  //[self.extensionContext completeRequestReturningItems:self.extensionContext.inputItems completionHandler:nil];
  [[self presentingViewController] dismissViewControllerAnimated:NO completion:nil];
}


- (void)viewDidLoad {
  
  [super viewDidLoad];
  
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(goBack) name:@"dismissViewController" object:nil];
  
  // hardcoding our JS to be served from the dev server while we're
  // experimenting with the share extension setup
  NSURL *jsCodeLocation = [NSURL URLWithString:@"http:192.168.0.4:8081/index.ios.bundle?platform=ios&dev=true"];
  
  //NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  
  // attempt to initialize an RCTRootView and use it as the root view of our
  // plain ‘ol UIViewController
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"CustomDictionary"
                                               initialProperties:nil
                                                   launchOptions:nil];
  self.view = rootView;
  
  
}

//this goBack method is going to be called by a notification being sent by the...
- (void)goBack {
  [self.extensionContext completeRequestReturningItems:self.extensionContext.inputItems completionHandler:nil];
  
  
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)done {
    // Return any edited content to the host app.
    // This template doesn't do anything, so we just echo the passed in items.
    [self.extensionContext completeRequestReturningItems:self.extensionContext.inputItems completionHandler:nil];
}

@end
