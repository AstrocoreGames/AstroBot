const IsAdmin = function(user) {
	if (user.hasPermission("ADMINISTER")) {
		return true
	} else {
		return false
	}
}

module.exports = IsAdmin