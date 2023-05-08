import React, { useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.terriblytinytales.com/test.txt');
      const content = response.data;
      const words = content.split(/[^\w]/).filter(word => word !== '');
      const wordCount = {};
      words.forEach(word => {
        const normalizedWord = word.toLowerCase();
        if (wordCount[normalizedWord]) {
          wordCount[normalizedWord] += 1;
        } else {
          wordCount[normalizedWord] = 1;
        }
      });
      const sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]).slice(0, 20);
      const histogramData = sortedWords.map(word => ({
        x: [word],
        y: [wordCount[word]],
        type: 'bar',
        name: word,
      }));
      setData(histogramData);
    } catch (e) {
      setError('Failed to fetch data');
    }
    setLoading(false);
  };

  const exportCSV = () => {
    const csvData = [['Word', 'Frequency']];
    data.forEach(({ name, y }) => csvData.push([name, y[0]]));
    const csvContent = "data:text/csv;charset=utf-8," + csvData.map(row => row.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "histogram_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Word Frequency Histogram</h1>
        <button onClick={fetchData} disabled={loading} className='btn-1'>Submit</button>
        {error && <p>{error}</p>}
        {data.length > 0 && (
          <>
            <Plot className='plot'
              data={data}
              layout={{
                width: 800,
                height: 500,
                
                title: 'Top 20 Words by Frequency',
                xaxis: { title: 'Word' },
                yaxis: { title: 'Frequency' },
              }}
            />
            <div className="export">
              <button onClick={exportCSV}>Export</button>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
