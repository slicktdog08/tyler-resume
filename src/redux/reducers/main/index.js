
import { ADD_DETAILS, ADD_SERVICES, ADD_ABOUT_ME_SKILLS,
     ADD_ATTACHMENTS, ADD_SOCIAL_PROFILES, ADD_RESUME_BIO,
    ADD_SKILLS, ADD_SKILL_BUTTONS, ADD_PROFESSIONAL_EXPERIENCE,
    ADD_ACADEMIC_BACKGROUND }
 from '../../constants/index'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

const mainReducer = (state= [], action) => {
    switch(action.type){
        case ADD_DETAILS:
            return {...state,
                details:{
                    detailsID: action.detailsID,
                    tagline: action.tagline,
                    imageURL: action.imageURL,
                    name: action.name,
                    city: action.city,
                    state: action.state,
                    country: action.county,
                    experience: action.experience,
                    degree: action.degree,
                    careerLevel: action.careerLevel,
                    phone: action.phone,
                    email: action.email,
                    website: action.website,
                    bio: action.bio,
                    bioHTML: {
                        __html: action.bio
                    },
                    age: action.age,
                    parsedPhone: parsePhoneNumberFromString(action.phone, 'US').formatNational() ? parsePhoneNumberFromString(action.phone, 'US').formatNational() : '',
                    
                }

            }
        case ADD_SERVICES:
            return { ...state,
                services: action.services
            }
        case ADD_ABOUT_ME_SKILLS:
            return { ...state,
                aboutMeSkills: action.skills}
        case ADD_ATTACHMENTS:
            return{ ...state,
                attachments: action.attachments}
        case ADD_SOCIAL_PROFILES:
            return{ ...state,
                socialProfiles: action.socialProfiles}
        case ADD_RESUME_BIO:
            return{ ...state,
                resumeBio: {
                    __html: action.resumeBio[0].desc
                }
            }
        case ADD_SKILLS:
            return{ ...state,
                skills: {
                    WebDevelopment: action.skills.filter( skill => {
                        return(
                            skill.category === "Web Development"
                         )
                    }),
                    NetworkAdmin: action.skills.filter( skill => {
                        return(
                            skill.category === "Network Administration"
                        )
                    }),
                    General: action.skills.filter( skill => {
                        return(
                            skill.category === "General"
                        )
                    })
                }
            }
        case ADD_SKILL_BUTTONS :
            return { ...state,
                skillButtons: action.skillButtons
            }
        case ADD_PROFESSIONAL_EXPERIENCE:
            console.log(action.professionalExperience)
            var newArray = action.professionalExperience.slice();
            newArray.forEach( element =>{
                element.__html = element.desc
            })
            return { ...state,
                professionalExperience: newArray
                        
            }
        case ADD_ACADEMIC_BACKGROUND:
            return{ ...state, 
                academicBackgrounds: action.academicBackgrounds}
         
            
            
            
        default:
            return state
    }
}

export default mainReducer