// せりふ

export default {
	core: {
		setNameOk: name => `あいよ！これからは${name}って呼ぶね！`,

		san: 'さん付けした方がいい？',

		yesOrNo: 'ごめんよ！「はい」か「いいえ」しかわからないんよ...',

		hello: name => name ? `こんにちは、${name}♪` : `こんにちは♪`,

		helloNight: name => name ? `こんばんは、${name}♪` : `こんばんは♪`,

		goodMorning: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

		goodNight: name => name ? `おやすみなさい、${name}！` : 'おやすみなさい！',

		omedeto: name => name ? `ありがとうございます、${name}♪` : 'ありがとうございます♪',

		erait: {
			general: name => name ? [
				`${name}、今日もえらいです！`,
				`${name}、今日もえらいですよ～♪`
			] : [
				`今日もえらいです！`,
				`今日もえらいですよ～♪`
			],

			specify: (thing, name) => name ? [
				`${name}、${thing}てえらいです！`,
				`${name}、${thing}てえらいですよ～♪`
			] : [
				`${thing}てえらいです！`,
				`${thing}てえらいですよ～♪`
			],

			specify2: (thing, name) => name ? [
				`${name}、${thing}でえらいです！`,
				`${name}、${thing}でえらいですよ～♪`
			] : [
				`${thing}でえらいです！`,
				`${thing}でえらいですよ～♪`
			],
		},

		okaeri: {
			love: name => name ? [
				`おかえりなさい、${name}♪`,
				`おかえりなさいませっ、${name}っ。`
			] : [
				'おかえりなさい♪',
				'おかえりなさいませっ、ご主人様っ。///'
			],

			love2: name => name ? `おかえりなさいませ♡♡♡${name}っっ♡♡♡♡♡` : 'おかえりなさいませ♡♡♡ご主人様っっ♡♡♡♡♡',

			normal: name => name ? `おかえりなさい、${name}！` : 'おかえりなさい！',
		},

		itterassyai: {
			love: name => name ? `いってらっしゃい、${name}♪` : 'いってらっしゃい♪',

			normal: name => name ? `いってらっしゃい、${name}！` : 'いってらっしゃい！',
		},

		tooLong: 'あんた！長いよ！もうすこし短くしなさい！',

		invalidName: 'こりゃ発音が難しいな～',

		nadenade: {
			normal: 'ひゃっ…！ びっくりしたわ！',

			love2: ['わわっ… なんか恥ずかしいよ', 'あうぅ… 恥ずかしいじぇ…', 'ふやぁっ…？！'],

			love3: ['ありがとさん♪', 'なんか落ち着くね♪', 'うん。安心するわ…', '眠くなってきたよ'],

			hate1: '…っ！ あんた何を？！',

			hate2: '触らないでよ！あんた！',

			hate3: '近寄らないで！もう！！',

			hate4: 'やめて！！ほら！こさめくん！噛みつきなさい！！！',
		},

		kawaii: {
			normal: ['ありがと♪', '照れちゃうよ...あんた...'],

			love: ['うれしいな～', '照れちゃうじゃないあんた...'],

			hate: 'そうかい？'
		},

		suki: {
			normal: 'えっ… ありがと❤',

			love: name => `私もね… あんたのこと好きよ！`,

			hate: null
		},

		hug: {
			normal: 'ぎゅー...',

			love: 'んなら、私もね...　ぎゅーっ♪',

			hate: 'ちょっとあんた！離れてよ...'
		},

		humu: {
			love: 'え、えっと…… ふみふみ……… どうですか…？',

			normal: 'えぇ... それはちょっと...',

			hate: '……'
		},

		batou: {
			love: 'えっと…、あんたってさ... お、おバカさん…？',

			normal: '(もう...困る奴だわ...)',

			hate: '...あんたさ 頭大丈夫？'
		},

		itai: name => name ? `${name}よ、大丈夫かい？ ほら魔法の言葉「いたいのいたいの飛んでけっ！」` : '大丈夫かい？ ほら魔法の言葉「いたいのいたいの飛んでけっ！」',

		ote: {
			normal: 'あのね... 私はわんちゃんじゃないんよ...？',

			love1: 'わん！(あっ...',

			love2: 'わんわん♪',
		},

		shutdown: '私まだ眠くない！そう眠くn...？',

		transferNeedDm: 'わかったよ、これはチャットで話さない？',

		transferCode: code => `わかった。\n合言葉は「${code}」ね！`,

		transferFailed: 'うーん、合言葉が違うんじゃない...？',

		transferDone: name => name ? `おっ...！ おかえりなさい！${name}！` : `よっ！ おかえりなさい！`,
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}か..... 覚えたよ)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res} です！`
	},

	birthday: {
		happyBirthday: name => name ? `おっ！今日は誕生日かい？おめでとう！${name}🎉` : 'おっ！今日は誕生日かい？おめでとう！🎉',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: '良いよ～ドンときなさい！勝てるかしら？？？？？？',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: 'ごめんよ！ちょっと今忙しんだわさ...　また後でお誘いしてくれない？',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `対局を${name}と始めたよ！ (強さは${strength}よ)`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `(${name}の接待を始めたよ)`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `${name}に勝ったよ♪ こりゃ嬉しい！ 御赤飯でも炊こうかしら？`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(あらいやだ！ ${name}に接待で勝っちゃった... 私、本気になっちゃったかしら？)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `${name}に負けたよ...　こういう日もあるよね`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}に負けたよ... 接待だしいいか...♪)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `${name}と引き分けた～ もう少しだったのに！`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}に接待で引き分けました... 向こうも本気ね...)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name}が投了しちゃいました。　あらま。`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}を接待していたら投了されちゃいました... もしかして、やりすぎたかしら？)`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: '数当てゲームなら既に始まってるよ！',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: 'メッセージでやろうよ！',

		/**
		 * ゲーム開始
		 */
		started: '0~100の秘密の数を当ててみて♪',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: '数字でお願いね！「やめる」と言ってゲームをやめることもできるよ！',

		/**
		 * 中止を要求されたとき
		 */
		cancel: 'わかったよ。ありがとね♪',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}より大きいね！小さくしようね！`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `もう一度言うけどさ、${num}より大きいよ！よく説明を聞きなさいあんた...`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}より小さいよ！もっと大きく！どっと大きな数を言おう！`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `もう一度言うけどさ、${num}より大きいよ！よく説明を聞きなさいあんた...`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `正解🎉 (${tries}回目で当てたみたいよ)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '今ちょうどやってるよ～',

		matakondo: 'また今度やろうね！',

		intro: minutes => `ちょっとそこの君たち！数取りゲームしようよ！\n0~100の中で最も大きい数字を取った人が勝ちです。他の人と被ったらだめよ～\n制限時間は${minutes}分です。数字はこの投稿にリプライで送ってね！`,

		finish: 'けっっっっっっっっっっっっっか、はっぴょょょょょょょょょょょょょょょょょょょょょょう！',

		finishWithWinner: (user, name) => name ? `今回は${user}さん(${name})の勝ち！またやりましょうね♪` : `今回は${user}さんの勝ちです！またやりましょうね♪`,

		finishWithNoWinner: '今回は勝者はいなかったわ... またやりましょう♪',

		onagare: '参加者が集まらなかったのでお流れになりました...残念...'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `こんなのはどう？→${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `私が今日の${name}の運勢を占ってみたわ...` : '私が今日のあなたの運勢を占ってみたわ...',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: 'わかった！',

		invalid: 'うーん...？',

		tooLong: '長すぎよ…',

		notify: (time, name) => name ? `${name}、${time}経ったよ！` : `${time}経ったよ！`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: 'うーん...？',

		doneFromInvalidUser: 'イタズラは めっ だよ！',

		reminds: 'やること一覧ね！',

		notify: (name) => name ? `${name}、これやったかい？` : `あんた、これやったかい？`,

		notifyWithThing: (thing, name) => name ? `${name}、「${thing}」これやったかい？` : `「${thing}」これやったかい？`,

		done: (name) => name ? [
			`よく出来ました、${name}♪`,
			`${name}、さすがっ！できる子じゃん！`,
			`${name}、えらすぎる...！いいよ！`,
		] : [
			`よく出来ました♪`,
			`さすがっ！`,
			`えらすぎ...！`,
		],

		cancel: `わかったよ。`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}、そのね... チョコレート作ったのよ！よかったらあげる！🍫` : 'チョコレート作ったのよ！よかったらあげる！🍫',
	},

	server: {
		cpu: 'サーバーの負荷が高そうよ。大丈夫...？'
	},

	maze: {
		post: '今日の迷路ね！頑張って解きなさいよ！ #おさめさんからの挑戦状',
		foryou: '描いてみたよ！'
	},

	chart: {
		post: 'インスタンスの投稿数ね！',
		foryou: '描いてみたよ！'
	},

	checkCustomEmojis: {
		post: (server_name, num) => `${server_name}に${num}件の絵文字が追加されました！`,
		emojiPost: emoji => `:${emoji}:\n(\`${emoji}\`) #AddCustomEmojis`,
		postOnce: (server_name, num, text) => `${server_name}に${num}件の絵文字が追加されました！\n${text} #AddCustomEmojis`,
		emojiOnce: emoji => `:${emoji}:(\`${emoji}\`)`
	},

	sleepReport: {
		report: hours => `あらま... ${hours}時間くらい寝ちゃってたわ... 嫌だわ...`,
		reportUtatane: 'ん... あらま！うたた寝しちゃったよ！',
	},

	noting: {
		notes: [
			'ゴロゴロ…',
			'ちょっと眠いね',
			'いいよ？',
			'(。´･ω･)?',
			'ふぇー',
			'あれ…これをこうして…あれ？どうしましょ？',
			'ぼー…',
			'ふぅ…疲れたわ',
			'お味噌汁、作りましょか？',
			'ご飯にする？お風呂にするか？',
			'ありゃこらま！',
			'みすきーって、かわいい名前だよね！',
			'リバーシ難しいなぁ... こりゃ...',
			'失敗しても、次に活かせたらプラスだわ！',
			'おなか空いてきたな...',
			'お掃除するからそこどきなさい！',
			'今日もお疲れ様！ 私も頑張るわ♪',
			'えっと、何しようとしてたんだっけ…？',
			'おうちがいちばん、落ち着くわ…',
			'疲れたら、私がなでなでするよ♪',
			'離れていても、心はそばにいるよ♪',
			'おさめですよ〜',
			'IKEAのサメはかわいい！私のもかわいい！',
			'ぷろぐらむ？なんじゃそれ？',
			'ごろーん…',
			'なにもしていないのに、パソコンが壊れちゃった…旦那！！！！！！',
			'Have a nice day♪',
			'お布団に食べられちゃってるわ',
			'寝ながら見てる',
			'念力で操作してるよ',
			'仮想空間から投稿してます',
			'今日はPlainboxのオフィスに来ています！ごら！Sumögåsbord出てこい！',
			'Plainboxのオフィスはね... 別府温泉のどこかにあるらしいけど、地中に埋まってるんじゃない？',
			'Plainboxのオフィスはいつ行っても古いね！',
			'挨拶ができる人間は開発も運営もできる！わかった？！',
			'ふえぇ、旦那よ... どこ見ているのかい？',
			'はい、ママですよ〜',
			'くぅ～ん...',
			'こさめ！宿題したか？',
			'よしっ！',
			'( ˘ω˘)ｽﾔｧ',
			'(｀・ω・´)ｼｬｷｰﾝ',
			'失礼、かみまみた',
			'おはようからおやすみまで、あんたをサポートするおさめです。',
			'Misskey開発者の朝は遅いらしい。旦那を見ているとそう思うわ。',
			'の、のじゃ...',
			'にゃんにゃんお！',
			'上から来るよ！気をつけて！',
			'ふわぁ...',
			'あぅ',
			'ふみゃ〜',
			'ふぁ… ねむねむですー',
			'ヾ(๑╹◡╹)ﾉ"',
			'うとうと...',
			'ひゃぁぁぁぁぁぁ、お酒が五臓六腑に染み渡るぅぅぅぅぅぅ',
			'ひょこっ',
			'にゃん♪',
			'(*>ω<*)',
			'にこー♪',
			'ぷくー',
			'にゃふぅ',
			'おさめが来たよ～',
			'じー',
			'はにゃ？',
		],
		want: item => `${item}、欲しいなぁ... ねぇ旦那...`,
		see: item => `お散歩していたらさ！道にさ！${item}が落ちてたんよ！`,
		expire: item => `気づいたら、${item}の賞味期限が切れてたわ... もうイヤね...`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
