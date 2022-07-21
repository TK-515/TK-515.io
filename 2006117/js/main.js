// function song(songs) {
//     let songArray = ['Save Yourself','Renegades','Broken Heart of Gold'];
//     console.log(songArray[song]);
//     let rand = Math.floor(Math.random() * 3);

//     if (songs === rand) {
//         message = 'Save Yourself';
//     } else if (songs === 1) {
//         message = 'Renegades';
//     } else {
//         message = 'Broken Heart of Gold';
//     }

//     console.log(message);

//     const result = document.querySelector('#result');
//     result.textContent = message;S
// }

function test() {
    let songArray = ['Save Yourself', 'Renegades', 'Broken Heart of Gold', 'Wonder',
        '内秘心書', 'Borderline', '(you can do) everything', '夜にしか咲かない満月', '努努-ゆめゆめ-', 'カゲロウ', 'Lujo', 'ケムリ', '欲望に満ちた青年団', 'エトセトラ', 'A new one for all,All for the new one',
        '必然メーカー', 'Melody Lineの死亡率', '100%(hundred percent)', 'Abduction-Interlude', '燦さん星', '光芒', 'Crazy Botch', 'Yap',
        '恋ノアイボウ心ノクピド', 'どっぺるゲンガー', '皆無', '20 years old', 'Living Dolls', 'Break My Strings', '存在証明', 'CONVINCING', 'My sweet baby', 'Reflection', 'Viva Violent Fellow ~美しきモッシュピット~', 'JUST',
        'Introduction', 'Never Let This Go', '完全感覚Dreamer', '混雑コミュニケーション', 'Yes I am', 'Shake it down', 'じぶんROCK', 'Liar', 'Wherever you are', 'Riot!!', 'アダルトスーツ', '未完成交響曲', 'Nobodys Home',
        'Coda', 'LOST AND FOUND', 'アンサイズニア', 'NO SCARED', 'C.h.a.o.s.m.y.t.h', 'Mr.現代Speaker', '世間知らずの宇宙飛行士', 'Re:make', 'Pierce', 'Lets take it some day', 'キミシダイ列車',
        'Introduction~Whereidiot should go~', 'Ending Story??', 'ONION!', 'The Beginning', 'Clock Strikes', 'Be the light', 'Nothing helps', 'Juvenile', 'All Mine', 'Smiling down', 'Deeper Deeper', '69', 'the same as...',
        '3xxxv5', 'Take me to the top', 'Cry out', 'Suddenly', 'Mighty Long Fall', 'Heartache', 'Memories', 'Decision', 'Paper Planes (featuring Kellin From Sleeping with Sirens)', 'Good Goodbye', 'One by One', 'Stuck in the middle', 'Fight the night', 'Last Dance', 'The way back',
        'Ambitions -Introduction-', 'Bombs away', 'Taking off', 'We are', '20/20', 'Jaded(Feat.Alex Gaskarth)', 'Always coming back', 'Hard to Love', 'Bedroom Warfare', 'American Girls', 'Lost in Tonight', 'I was King', 'Listen (featuring Avril Lavigne)', 'One Way Ticket', 'Bon Voyage', 'Start Again', 'Take what you want (featuring 5 Secnods of Summer)',
        'Eye of the Storm', 'Stand Out Fit In', 'Head High', 'Grow Old Die Young', 'Push Back', 'Wasted Nights', 'Change', 'Letting go', 'Worst in Me', 'In the Stars (feat.Kiiara)', 'Giants', 'Unforgettable', 'Cant Wait', 'The Last Time',
        'Keep it real', '辛い+一=幸せ', 'P.P.S.H.', 'And I know', 'もしも太陽がなくなったとしたら・・・', '日常エボリューション', 'Youve Broken My Heart', 'ROSE BLOOD', '内秘心書', '過去は教科書に未来は宿題', '努努-ゆめゆめ-', 'カラス', 'エトセトラ', '後悔役に立たず',
        '完全感覚Dreamer', '独り言ロンリーナ', 'リングワンデルング', 'アンサイズニア', 'Silent World', 'アンサイズクリア', 'To Feel The Fire', 'Re:make', 'NO SCARED', 'Rock, Scissors, Paper', 'The Beginning', '欠落オートメーション', 'Notes n Words', 'Deeper Deeper', 'Nothing Helps', 'カサブタ', 'Mighty Long Fall', 'Decision', 'Pieces of Me'];
    
    let urlArray = ['https://www.youtube.com/watch?v=YdWJmKSVf5c','https://www.youtube.com/watch?v=Ajr18Yw5xdY','https://www.youtube.com/watch?v=wJ6FMjZkbMI','https://www.youtube.com/watch?v=ppL_15jZm_E','https://www.youtube.com/watch?v=fSH68-wZUjI','https://www.youtube.com/watch?v=rn4clIAB9sI','https://www.youtube.com/watch?v=9VTMeJNMR-A',
    'https://www.youtube.com/watch?v=xRVmB3KcDoQ','https://www.youtube.com/watch?v=Nuyxj5nUK8Y','https://www.youtube.com/watch?v=HtOiFd4x-yE','https://www.youtube.com/watch?v=U0YH_fPy_PU','https://www.youtube.com/watch?v=pjI8lByDWIw','https://www.youtube.com/watch?v=AK5mlcegGA8','https://www.youtube.com/watch?v=d5qm2Gwr7o0','https://www.youtube.com/watch?v=UZfdnlGzfjE',
    'https://www.youtube.com/watch?v=-y6KQZqkKvY','https://www.youtube.com/watch?v=V6s8AtpHwaQ','https://www.youtube.com/watch?v=zQQ8OsdOi5o','https://www.youtube.com/watch?v=qj7CERei154','https://www.youtube.com/watch?v=27GkijX9rDU','https://www.youtube.com/watch?v=I4Z_KPwJT9o','https://www.youtube.com/watch?v=WBJbUNq5XtQ','https://www.youtube.com/watch?v=dQbpXBTLkMw',
    'https://www.youtube.com/watch?v=gyshJYTEXgU','https://www.youtube.com/watch?v=E0i4mK45d7k','https://www.youtube.com/watch?v=tfLfKdzum48','https://www.youtube.com/watch?v=FOmZFI2zBjQ','https://www.youtube.com/watch?v=EbTSyNI-xcs','https://www.youtube.com/watch?v=3HFeKdcDtso','https://www.youtube.com/watch?v=S4YYpphIqd4','https://www.youtube.com/watch?v=KlvuqLJHXTc',
    'https://www.youtube.com/watch?v=le4yc8_21Lw','https://www.youtube.com/watch?v=o-Tvn06XPsc','https://www.youtube.com/watch?v=sRSUs3QeuXg','https://www.youtube.com/watch?v=_S1ZXYXcyTU','https://www.youtube.com/watch?v=ZBa4-nTSMh8','https://www.youtube.com/watch?v=ZEahkUkUKXs','https://www.youtube.com/watch?v=xGbxsiBZGPI','https://www.youtube.com/watch?v=5szVTMYZJGM',
    'https://www.youtube.com/watch?v=4OE_6SqVcAA','https://www.youtube.com/watch?v=4ONa8YSHp90','https://www.youtube.com/watch?v=Y_tUf_-Xz44','https://www.youtube.com/watch?v=osr0JxHm9nY','https://www.youtube.com/watch?v=Od_sagoe6gg','https://www.youtube.com/watch?v=TgWgkf0BnOQ','https://www.youtube.com/watch?v=OKbdFVKuG4A','https://www.youtube.com/watch?v=lTz3XlKxaNQ',
    'https://www.youtube.com/watch?v=HdIG7nHRh-8','https://www.youtube.com/watch?v=ZSRT6GifHUg','https://www.youtube.com/watch?v=6oaA28KSCa4','https://www.youtube.com/watch?v=WgjgACnHuWQ','https://www.youtube.com/watch?v=qKW4lqj2cNU','https://www.youtube.com/watch?v=C-xF2MAFw5s','https://www.youtube.com/watch?v=uUPdnasQ9AU','https://www.youtube.com/watch?v=b_7DzsflRiY',
    'https://www.youtube.com/watch?v=bV4vcr8E4HU','https://www.youtube.com/watch?v=qztngMB5inw','https://www.youtube.com/watch?v=qrPB5GuDNz0','https://www.youtube.com/watch?v=-TQgOaFZ-HM','https://www.youtube.com/watch?v=Wo2htCJdgRE','https://www.youtube.com/watch?v=1cY1YAehc_k','https://www.youtube.com/watch?v=1XYc3GCODj0','https://www.youtube.com/watch?v=Hh9yZWeTmVM',
    'https://www.youtube.com/watch?v=6YZlFdTIdzM','https://www.youtube.com/watch?v=drSMZgnmJjk','https://www.youtube.com/watch?v=i9tWFGUIh4c','https://www.youtube.com/watch?v=ObS0kK71OqY','https://www.youtube.com/watch?v=YPgdVxIRZFw','https://www.youtube.com/watch?v=XUvLK4CGDI4','https://www.youtube.com/watch?v=tcBBNB5JTOQ','https://www.youtube.com/watch?v=nNLdE0kD1Lg',
    'https://www.youtube.com/watch?v=hZiV-4ocZUI','https://www.youtube.com/watch?v=SwLESeySEGA','https://www.youtube.com/watch?v=59ZoPHn74aU','https://www.youtube.com/watch?v=JWSRqWpWPzE','https://www.youtube.com/watch?v=xOB4zHufQSE','https://www.youtube.com/watch?v=UjZqcDYbvAE','https://www.youtube.com/watch?v=XCQ-vcXjW54','https://www.youtube.com/watch?v=UpoUsDi9fOA',
    'https://www.youtube.com/watch?v=iKPpc1oP70A','https://www.youtube.com/watch?v=RUsxG0xElx4','https://www.youtube.com/watch?v=kTdql6Yoce8','https://www.youtube.com/watch?v=N39rMPOJ_mI','https://www.youtube.com/watch?v=d3G9lZTAj6M','https://www.youtube.com/watch?v=B-4yfPRnq4c','https://www.youtube.com/watch?v=6j4vxu8dnp4','https://www.youtube.com/watch?v=q2dFMNPA9jQ',
    'https://www.youtube.com/watch?v=rjWklvot2dM','https://www.youtube.com/watch?v=Qj6R1Q6HfsQ','https://www.youtube.com/watch?v=slbGwyE_9oY','https://www.youtube.com/watch?v=CRLLWNIqb8w','https://www.youtube.com/watch?v=yPbaXeaybXc','https://www.youtube.com/watch?v=rqAlVgkTbRw','https://www.youtube.com/watch?v=MRMByaLcVaM','https://www.youtube.com/watch?v=vd4sT3CFLeI',
    'https://www.youtube.com/watch?v=a0mnMzAAv7Q','https://www.youtube.com/watch?v=RgKp3ppdhWs','https://www.youtube.com/watch?v=Lfd6iNzEfeo','https://www.youtube.com/watch?v=M0V46khLWnk','https://www.youtube.com/watch?v=l10rrNOTxYc','https://www.youtube.com/watch?v=tq6rzf3PvTU','https://www.youtube.com/watch?v=HOcgPQmp458','https://www.youtube.com/watch?v=Ey11eO1FAeo',
    'https://www.youtube.com/watch?v=XjDj-MNHwxE','https://www.youtube.com/watch?v=oAIuU24vSYA','https://www.youtube.com/watch?v=IGInsosP0Ac','https://www.youtube.com/watch?v=FBVIG0thiT0','https://www.youtube.com/watch?v=VoZ-P-8N0iM','https://www.youtube.com/watch?v=HJr-bG3_MN4','https://www.youtube.com/watch?v=9tvU1emWJgY','https://www.youtube.com/watch?v=z2ed0Tazw0E',
    'https://www.youtube.com/watch?v=TRp3ZX1iU8w','https://www.youtube.com/watch?v=fjPqESXQuLE','https://www.youtube.com/watch?v=bwyevbK_N-0','https://www.youtube.com/watch?v=0-vbjWN9Zfk','https://www.youtube.com/watch?v=IdlycXy4dcM','https://www.youtube.com/watch?v=UPXURZzLGj0','https://www.youtube.com/watch?v=sDwmiyQo5aM','https://www.youtube.com/watch?v=sF1larH1-bc',
    'https://www.youtube.com/watch?v=0DdD1oZOvlY','https://www.youtube.com/watch?v=bNKeJramF-4','https://www.youtube.com/watch?v=Uwv6mqS6LtU','https://www.youtube.com/watch?v=e1LCEipkhTY','https://www.youtube.com/watch?v=JcfH3634lsA','https://www.youtube.com/watch?v=sdLlIQsyVPQ','https://www.youtube.com/watch?v=Ovj6ld41Gwo','https://www.youtube.com/watch?v=fSH68-wZUjI',
    'https://www.youtube.com/watch?v=BEqQaRhKWJw','https://www.youtube.com/watch?v=dMfI9xgKFFE','https://www.youtube.com/watch?v=1_VhwaaU9Bc','https://www.youtube.com/watch?v=exOFjpg5xYY','https://www.youtube.com/watch?v=KJ7OUUcTfJk','https://www.youtube.com/watch?v=xGbxsiBZGPI','https://www.youtube.com/watch?v=5YUGRmn5cdU','https://www.youtube.com/watch?v=GW9AZKaYvXk',
    'https://www.youtube.com/watch?v=WgjgACnHuWQ','https://www.youtube.com/watch?v=KdWE5tj6qyc','https://www.youtube.com/watch?v=ePltQ9xps6w','https://www.youtube.com/watch?v=58-KoXLdSHI','https://www.youtube.com/watch?v=bV4vcr8E4HU','https://www.youtube.com/watch?v=qKW4lqj2cNU','https://www.youtube.com/watch?v=_rGzrKAC3cw','https://www.youtube.com/watch?v=Hh9yZWeTmVM',
    'https://www.youtube.com/watch?v=btbKkEp-czk','https://www.youtube.com/watch?v=1TZkzYGNxps','https://www.youtube.com/watch?v=tcBBNB5JTOQ','https://www.youtube.com/watch?v=Osxm92aI9Jc','https://www.youtube.com/watch?v=c1WPGIQJVNE','https://www.youtube.com/watch?v=UjZqcDYbvAE','https://www.youtube.com/watch?v=8kEGNVkmgZ0','https://www.youtube.com/watch?v=qrtVb4xElNw'];
    let rand = Math.floor(Math.random() * 150);

    console.log(songArray[rand]);
    console.log(urlArray[rand]);

    let message = songArray[rand];
    let url = urlArray[rand];

    // const result = document.querySelector('#result');
    // result.innerHTML = message;

    // aタグの間の文字列
    $('#result').text(message);
    // aタグのhref属性
    $('#result').attr('href', url);


    // result.textContent = message;

}