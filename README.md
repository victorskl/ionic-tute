Trying out Ionic framework with Capacitor native mobile runtime

- https://ionicframework.com/
- https://capacitorjs.com/
- https://github.com/ionic-team/ionic-framework
- https://github.com/ionic-team/capacitor

```
yarn global add @ionic/cli

which ionic
/usr/local/bin/ionic

ionic --help
ionic start --help
ionic start --list
```

```
ionic start hello tabs --type react --no-git

Your Ionic app is ready! Follow these next steps:
    - Go to your new project: cd ./hello
    - Run `ionic serve` within the app directory to see your app in the browser
    - Run `ionic capacitor add` to add a native iOS or Android project using Capacitor
    - Generate your app icon and splash screens using `cordova-res --skip-config --copy`
    - Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs

cd hello
ionic serve --help
ionic serve
(ctrl+c)
```

---

Following
- https://ionicframework.com/docs/react/quickstart

```
ionic start myApp blank --type=react
cd myApp
ionic serve
(ctrl+c)
```

```
ionic integrations enable capacitor
ionic build
```

```
ionic cap add ios
> npm i -E @capacitor/ios@4.7.1
...
> capacitor add ios
[capacitor] ✔ Adding native Xcode project in ios in 60.07ms
[capacitor] ✔ add in 60.78ms
[capacitor] ✔ Copying web assets from build to ios/App/App/public in 278.49ms
[capacitor] ✔ Creating capacitor.config.json in ios/App/App in 1.21ms
[capacitor] ✔ copy ios in 355.25ms
[capacitor] ✔ Updating iOS plugins in 7.92ms
[capacitor] [info] Found 4 Capacitor plugins for ios:
[capacitor]        @capacitor/app@4.1.1
[capacitor]        @capacitor/haptics@4.1.0
[capacitor]        @capacitor/keyboard@4.1.1
[capacitor]        @capacitor/status-bar@4.1.1
[capacitor] ✔ Updating iOS native dependencies with pod install in 25.95s
[capacitor] ✔ update ios in 26.00s
[capacitor] [success] ios platform added!
[capacitor] Follow the Developer Workflow guide to get building:
[capacitor] https://capacitorjs.com/docs/basics/workflow
```

```
ionic cap add android
> npm i -E @capacitor/android@4.7.1
...
> capacitor add android
[capacitor] ✔ Adding native android project in android in 73.81ms
[capacitor] ✔ add in 74.46ms
[capacitor] ✔ Copying web assets from build to android/app/src/main/assets/public in 116.63ms
[capacitor] ✔ Creating capacitor.config.json in android/app/src/main/assets in 1.24ms
[capacitor] ✔ copy android in 226.71ms
[capacitor] ✔ Updating Android plugins in 9.28ms
[capacitor] [info] Found 4 Capacitor plugins for android:
[capacitor]        @capacitor/app@4.1.1
[capacitor]        @capacitor/haptics@4.1.0
[capacitor]        @capacitor/keyboard@4.1.1
[capacitor]        @capacitor/status-bar@4.1.1
[capacitor] ✔ update android in 67.09ms
[capacitor] ✔ Syncing Gradle in 94.19s
[capacitor] [success] android platform added!
[capacitor] Follow the Developer Workflow guide to get building:
[capacitor] https://capacitorjs.com/docs/basics/workflow
```

```
brew install --cask android-studio
ionic cap open android
```

```
ionic cap open ios
```

- https://capacitorjs.com/docs/getting-started/with-ionic

```
ionic capacitor build
ionic capacitor run android -l --external
ionic capacitor run ios --livereload --external
```
