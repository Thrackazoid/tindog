// Create the Dog class here

class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    
    setMatchStatus (bool = false) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    getDogHtml () {
      const {name, avatar, age, bio} = this
      return `
            <div class="feature-suggestion">
            <img id="like" class='badge' hidden src="/images/badge-like.png">
            <img id='nope' class='badge' hidden src="/images/badge-nope.png">
                <div class="dog-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="dog-img" src="${avatar}">
            </div>`
    }
}

export default Dog