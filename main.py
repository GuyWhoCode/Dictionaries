#ages exercise for dictionaries
agesDict = {
	"Margret": 64,
	"Don": 85,
	"Ismaeel": 68, 
	"Robinson": 81, 
	"Lester": 86, 
	"Bravo": 71, 
	"Jude": 88, 
	'Shepherd': 84,
	'Abid': 38 
}

oldestPerson = ""
youngestPerson = ""
for person in agesDict:
	if oldestPerson == "":
		oldestPerson = person
		youngestPerson = person
	elif agesDict.get(oldestPerson) < agesDict.get(person):
		oldestPerson = person
	elif agesDict.get(youngestPerson) > agesDict.get(person):
		youngestPerson = person

print (oldestPerson)
print (youngestPerson)

