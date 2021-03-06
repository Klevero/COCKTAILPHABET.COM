var controller = angular.module('controller', ['ngSanitize']);

function AppCtrl1($scope, $sce){

	var cocktails = [
	    
	    /*
			CCC
	    */
	    {
	        'letter':'c',
	        'letter_image':'images/letter_c.png',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'style':{
	        	'cocktail_position':'cocktailLeft',
	        	'ingredients_text_color':'rgba(255,26,144,1)',
	        	'triangle1':'rgba(249,232,178,0.4)',
	        	'triangle2':'rgba(239,79,141,0.3)',
	        },
	        'cocktail':{
		        'name':'cool leatherette',
		        'silo':'images/cool_letherette_2.png',
		        'description':"Sit down at Sisters and you'll soon be looking up.  Up and in every direction taking in the arts and crafts meets tiled cozy chic interior of this expanding chalet.  It is truly one of Brooklyn's beauties, or Fort Green to be exact.  And it's there that you can try a cocktail so perfectly named  the Cool Leatherette.  From the creator Johnny himself: There's an unrefined character to this drink, which I think is actually an asset.  People look for cocktails to individuate themselves through flavor, but I'm probably not alone in thinking it's important for them to have personality too.  We could have used some kind of shrub to introduce the vinegar component, but somehow good old balsamic makes drinking this seem a bit kinky, which is more fun.",
		        'receipes':[
		        	{
			        	'title':'for the cool leatherette',
			        	'ingredients':[
			        		'1.5 oz rye',
			        		'1.5 oz Ramazzotti',
			        		'.75 oz lime juice',
			        		'.75 oz ginger syrup',
			        		'.25 oz drizzle balsamic vinegar',
			        		'2 bourbon-vanilla cherries'
			        	]
		        	}
		        ],
		        'howto':'Build the rye Ramazzotti, lime juice, and ginger syrup in the shaker with ice.  Shake fine and strain into a rocks glass with three cubed ice using a julep strainer.  Drizzle with the balsamic and garnish with two speared bourbon-vanilla cherries from Brooklyns own Pioneer Cannery.',
	    	},
	        'bar':{
	        	'name':'sisters',
	        	'website':'http://tradesmanbar.com/',
	        	'image':'images/sisters_banner.png',
	        	'bulb_image':'images/sisters_bub.png',
	        	'address1':'900 FULTON ST',
	        	'address2':'BROOKLYN NY 11238',
	        	'phone':'(347) 763-2537'
	        }
	    },


	    /*
			GGG
	    */
	    {
	        'letter':'g',
	        'letter_image':'images/letter_g.png',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'style':{
	        	'cocktail_position':'cocktailRight',
	        	'ingredients_text_color':'rgba(255, 71, 26,1)',
	        	'triangle1':'rgba(250,235,236,0.6)',
	        	'triangle2':'rgba(193,205,158,0.6)',
	        },
	        'cocktail':{
		        'name':'gibson',
		        'silo':'images/gibson.png',
		        'description':"In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes \"Who doesn't want their own little onion?\" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)",
		        'receipes':[
		        	{
			        	'title':'for the gibson',
			        	'ingredients':[
			        		'2 oz Dorthy Parker gin',
			        		'.75 oz Noilly White vermouth',
			        		'.75 oz prepared brine',
			        		'2 dash liquid smoke'
			        	]
		        	},
		        	{
			        	'title':'for the brine',
			        	'ingredients':[
			        		'1 lb fresh cocktail onions',
			        		'.5 cup cider vinegar',
			        		'.5 cup red wine vinegar',
			        		'.5 cup water',
			        		'.5 cup sugar',
			        		'3 tbs salt',
			        		'2 sprigs rosemary',
			        		'3 bay leaves',
			        		'12 whole allspice',
			        		'.5 tbs minced garlic',
			        		'1 cup dry vermouth'
			        	]
		        	}
		        ],
		        'howto':'Prepare the brine by first blanching and pealing the onions. Combine all ingredients except onions and vermouth in a saucepan and simmer for 15 minutes. Pour mixture over onions and add the vermouth. Seal and let sit for 20 days.    Ok, you waited 20 days and resisted the urge to eat your jar of salty spicy onions! Congratulations. To make the perfect gibson combine all ingredients in a mixing glass. Stir well and strain using a julep strainer. Pour into a chilled glass and garnish with one onion and a small cut of rosemary from your brine. Enjoy the brine of your labor!!',
	    	},
	        'bar':{
	        	'name':'the tradesman',
	        	'website':'http://tradesmanbar.com/',
	        	'image':'images/gibson_banner.png',
	        	'bulb_image':'images/tradesman_bub.png',
	        	'address1':'222 BUSHWICK AVE',
	        	'address2':'BROOKLYN NY,11206',
	        	'phone':'(718) 386-5300'
	        }
	    }


	    /*,
	    {
	        'letter':'b',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	    	'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },

	    {
	        'letter':'c',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'d',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'e',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'f',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	      {
	        'letter':'g',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'.g_block_img',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'h',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'i',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	      {
	        'letter':'j',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'k',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'l',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	      {
	        'letter':'m',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'n',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'o',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	      {
	        'letter':'p',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'q',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'r',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'s',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'t',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'u',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	       {
	        'letter':'v',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'w',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'x',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    }*/
	];

	$scope.cocktails = cocktails;
	console.log($scope.cocktails[0]);
}
