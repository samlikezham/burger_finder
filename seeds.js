const mongoose = require('mongoose');
const Burgers = require('./models/burgers');
const Comment = require('./models/comment');

const data =[
	{
		name: "Sunny California Breakfast Burger",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39927875_1990357851003913_4847775465835855872_n.jpg?_nc_cat=0&oh=98c28f190a149857ad40362ad32660a1&oe=5C03AB1F"
	},
	{
		name: "Monstrami",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39918035_1990357734337258_6348787693073203200_n.jpg?_nc_cat=0&oh=ec5de4ad4e101c89a7b14a149630061d&oe=5C35D30A"
	},
	{
		name: "Mac and Cheeseburger",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39948184_1990357751003923_6515001961060761600_n.jpg?_nc_cat=0&oh=caf921425f74afac2f58ae5d39e61f52&oe=5C35C9FC"
	},
	{
		name: "Candied Bacon Burger",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39910349_1990357727670592_4869587388529115136_n.jpg?_nc_cat=0&oh=9a3f1262f28e121a394f0fa08c07508c&oe=5BEE5171"
	},
	{
		name: "Hot Cheetos Cheeseburger",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39880762_1990357834337248_3257656634440155136_n.jpg?_nc_cat=0&oh=7b1c0e86291131976fa1ce72e0c0bc6f&oe=5BFD89DA"
	},
	{
		name: "Elote Cheeseburger",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39891420_1990357841003914_216914862268219392_n.jpg?_nc_cat=0&oh=5e0fc60441339e73b30fbd3a17ae0613&oe=5C3836F7"
	},
	{
		name: "Stanich's Cheeseburger",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "https://bloximages.newyork1.vip.townnews.com/daily-journal.com/content/tncms/assets/v3/editorial/4/a1/4a14e12d-ac28-564e-afe2-cea223b505ef/5a85a388a1f9f.image.jpg"
	},
	{
		name: "Butter Cheese Cheeseburger",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39589188_10212873766659205_4664897102696939520_o.jpg?_nc_cat=0&oh=49e5c05513e89cb62e7e2fcc71bb788f&oe=5BF72922"
	},
]

seedDB = () =>{
	// remove all burgers
	Burgers.remove({}, ((error) => {
	if(error){
		console.log(error);
	}
	console.log("removed burgers");
	}));
	// add burgers to db
	data.forEach((seed) => {
		Burgers.create(seed, ((error, burger) => {
			if(error){
				console.log(error)
			} else {
				console.log("added burger")
				// create comments
				Comment.create(
					{
						text: "WOW!!!",
						author: "Sam"
					}, ((error, comment) => {
						if(error){
							console.log(error);
						} else {
							burger.comments.push(comment);
							burger.save();
							console.log("Created Comment")
						}
					})
				)
			}
		}))
	})
}

module.exports =seedDB;