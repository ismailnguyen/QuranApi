const { generateRandomNumber } = require('./random-number-generator.js');

module.exports = {
	generateRandomSurah: function (surahs) {
		const firstSurahNumber = surahs[0].number;
		const lastSurahNumber = surahs[surahs.length-1].number;
		const randomSurahNumber = generateRandomNumber(firstSurahNumber, lastSurahNumber);
		const randomSurah = surahs.find(surah => surah.number === randomSurahNumber);
		
		const firstAyahNumber = randomSurah.ayahs[0].number;
		const lastAyahNumber = randomSurah.ayahs[randomSurah.ayahs.length-1].number;
		const randomAyahNumber = generateRandomNumber(firstAyahNumber, lastAyahNumber);
		var randomAyah = randomSurah.ayahs.filter(ayah => ayah.number == randomAyahNumber);
		
		return randomAyah;
	}
}