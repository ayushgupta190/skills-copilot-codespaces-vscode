function skillmember() {
    return {
        skills: [],
        addSkill: function(skill) {
            this.skills.push(skill);
        },
        removeSkill: function(skill) {
            this.skills = this.skills.filter(function(item) {
                return item !== skill;
            });
        },
        getSkills: function() {
            return this.skills;
        },
        getSkillCount: function() {
            return this.skills.length;
        }
    };
}
