import RNFS from 'react-native-fs';
import Share from 'react-native-share';

export const savePaymentResponseToLocal = async (result) => {
    console.log('Saving payment response...');
    try {
        // Define folder path (Documents/AlHaram)
        const folderPath = `${RNFS.DocumentDirectoryPath}/AlHaram`;

        // Check if folder exists; if not, create it
        const folderExists = await RNFS.exists(folderPath);
        if (!folderExists) {
            await RNFS.mkdir(folderPath);
            console.log('✅ AlHaram folder created at:', folderPath);
        }

        // Define file path
        const filePath = `${folderPath}/payment_response.json`;

        // Write JSON to file
        await RNFS.writeFile(filePath, JSON.stringify(result), 'utf8');
        await Share.open({ url: `file://${filePath}`, type: 'application/json' });
        console.log('✅ Payment response saved at:', filePath);
    } catch (error) {
        console.error('❌ Error saving payment response:', error);
    }
};
