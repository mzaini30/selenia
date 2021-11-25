import {driver, until} from './index.js'

async function app(){

	// Membuka Wikipedia
	await driver.get('http://www.wikipedia.org/')

	// Menunggu
	await driver.wait(until.urlContains('https'));
	console.log('Sudah https')

	// Mengisi input pencarian
	await driver.executeScript(`document.querySelector('#searchInput').value = 'sekolah'`)

	// Klik tombol cari
	await driver.executeScript(`document.querySelector('[type="submit"]').click()`)

	// Dapatkan link saat ini
	const linknya = await driver.getCurrentUrl()
	console.log(linknya)

	// Jeda 5 detik
	await driver.sleep(5000)
}
app()