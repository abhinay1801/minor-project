import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Mainbody() {
    return (
        <div className="flex flex-col items-center mt-20 h-100vh p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">URL SHORTENER</h1>
            <Box sx={{ width: 500, maxWidth: '100%' }} className="mb-4">
                <TextField
                    fullWidth
                    label="Enter Long URL"
                    id="long-url"
                    className="shadow-md"
                />
            </Box>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <Box sx={{ width: 300, maxWidth: '100%' }}>
                    <TextField
                        fullWidth
                        label="Enter the alias"
                        id="alias-input"
                        className="shadow-md"
                    />
                </Box>
                <Button
                    variant="outlined"
                    className="shadow-md hover:bg-gray-200 px-6 py-2"
                >
                    Generate QR
                </Button>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4">
                <Button
                    variant="outlined"
                    className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Short URL
                </Button>


            </div>


        </div>
    );
}

export default Mainbody;
