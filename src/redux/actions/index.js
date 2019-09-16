import { ADD_DETAILS, ADD_SERVICES, ADD_ABOUT_ME_SKILLS ,
     ADD_ATTACHMENTS, ADD_SOCIAL_PROFILES, ADD_RESUME_BIO,
    ADD_SKILLS, ADD_SKILL_BUTTONS, ADD_PROFESSIONAL_EXPERIENCE,
    ADD_ACADEMIC_BACKGROUND  }
 from '../constants/index'


export const addDetails = details => ({
    type: ADD_DETAILS,
    detailsID: details.detailsID,
    imageURL: details.imageURL,
    name: details.name,
    city: details.city,
    state: details.state,
    country: details.county,
    experience: details.experience,
    degree: details.degree,
    careerLevel: details.careerLevel,
    phone: details.phone,
    email: details.email,
    website: details.website,
    bio: details.bio,
    age: details.age,
    tagline: details.tagline
})

export const addServices = services => ({
    type: ADD_SERVICES,
    services: services
})

export const addAboutMeSkills = skills => ({
    type: ADD_ABOUT_ME_SKILLS,
    skills: skills
})

export const addAttachments = attachments =>({
    type: ADD_ATTACHMENTS,
    attachments: attachments
}) 

export const addSocialProfiles = socialProfiles => ({
    type: ADD_SOCIAL_PROFILES,
    socialProfiles: socialProfiles
})

export const addResumeBio = resumeBio => ({
    type: ADD_RESUME_BIO,
    resumeBio: resumeBio
})

export const addSkills = skills => ({
    type: ADD_SKILLS,
    skills : skills

})

export const addSkillButtons = skillButtons =>({
    type: ADD_SKILL_BUTTONS,
    skillButtons: skillButtons
})

export const addProfessionalExperience = professionalExperience => ({
    type: ADD_PROFESSIONAL_EXPERIENCE,
    professionalExperience: professionalExperience
})

export const addAcademicBackgrounds = academicBackgrounds => ({
    type: ADD_ACADEMIC_BACKGROUND,
    academicBackgrounds: academicBackgrounds
})
