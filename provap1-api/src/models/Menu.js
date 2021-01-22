const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const FoodSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}
});

const DaySchema = new mongoose.Schema({
	name: {
		type: String,
		enum: [
			'Segunda-feira', 
			'Terça-feira', 
			'Quarta-feira',
			'Quinta-feira',
			'Sexta-feira',
		],
		//required: true,
	},
	mealType: {
		type: String,
		enum: [
			'Almoço',
			'Jantar'
		],
		//required: true
	},
	foods: [FoodSchema],
});

const MenuSchema = new mongoose.Schema({
	startDate: {
		type: Date,
		min: '2020-01-01',
		max: '2030-12-30',
		//required: true
	},
	week: [DaySchema],
});

MenuSchema.plugin(mongoosePaginate);
mongoose.model('Menu', MenuSchema);
