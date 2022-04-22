class spiderman{
	constructor(name,age,actor,movieAppearances,studio){
		this.name=name
		this.age=age
		this.actor=actor
		this.movieAppearances=movieAppearances
		this.studio=studio
	}

	getInfo(){
		return `Hey, I'm ${this.actor} from ${this.studio}`
	} 
}

module.exports=spiderman