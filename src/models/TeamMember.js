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
                <img className="team-thumbnail" src={this.image}/>
                <h2>{this.name}, {this.position}</h2>
            </div>
        )
    }
}

export default TeamMember