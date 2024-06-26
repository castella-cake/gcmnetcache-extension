# gcmnetcache-extension
maimaiでらっくすNET/CHUNITHM-NET/オンゲキNETの画像とスタイルシートに対してキャッシュポリシーを再設定し、少しでも転送量や表示速度を改善する試み…の非公式拡張機能。    
Manifest V3のChromium系ブラウザや、Android向けFirefoxでも動作します。

Firefox: https://addons.mozilla.org/ja/firefox/addon/gcmnetcache/ (審査待ち)    
Chrome: TBD

**この拡張機能は非公式であり、SEGAとは一切提携していません。自己責任で使用してください。**

# 何をするのか
現在のゲキチュウマイNETには、転送するファイルの種類に限らず厳しめのキャッシュポリシーが設定されています。    
ゲキチュウマイNETはUIに画像をよく使用するため、UIの空白などによりユーザーエクスペリエンスを低下させたり、転送量の増加(特にCHUNITHM-NET)を招くことがあります。     

GCMNetCacheは、maimaiNET/CHUNITHM-NET/オンゲキNETの画像/スタイルシート取得時にヘッダーを再設定することで、ページ移動時などにスムーズな表示を助けます。    

# 留意点
- ページが狂ったり古い画像が表示されたらハードリロードをしてください    
キャッシュ持続時間(`max-age`)は2週間(1209600秒)です。 
もし表示が崩れたり、古いコンテンツが表示された場合は、PCではCtrl+Shift+Rで、Android用Firefoxの場合はリロードを長押ししてハードリロードを試してください。
- 自己責任です    
非公式なのでもちろん自己責任です。この拡張機能を利用したことによって、何か損害が発生しても開発者は責任を負いません。
- もし表示が崩れたら、拡張機能のせいではないか確認してください    
表示が崩れていたり、何か不具合が発生したときは、拡張機能やUserScriptによって引き起こされていないか確認してください。

# 使い方
1. インストールします
2. おわり    
まだ開発段階なので設定画面もなにもないです。インストールしたらおわり。    
何も効果がないように見える場合は、チュウニズムNET/maimaiNET/オンゲキNETに行ってCtrl+Shift+R(Android用Firefoxの場合はリロードを長押し)して、キャッシュを削除してください。    