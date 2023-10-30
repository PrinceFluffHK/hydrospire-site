import { Link } from "react-router-dom"

class TeamMember {
    constructor (name, position, image, redirect) {
        this.name = name
        this.position = position
        this.image = image
        this.redirect = redirect
    }

    display() {
        return (
            <div>
                <img className="" src={this.image}/>
                <h4>{this.name}, {this.position}</h4>
            </div>
        )
    }
}

export default TeamMember