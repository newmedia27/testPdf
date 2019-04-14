const params = {
    lines: [
        {
            background: '#00F',
            updateTime: 1000,
            elements: [
                {
                    background: 'green',
                    width: 25
                },
                {
                    background: 'black',
                    width: 50
                },
                {
                    background: 'yellow',
                    width: 25
                },

            ]
        },
        {
            background: '#FF0000',
            updateTime: 3000,
            elements: [
                {
                    background: 'brown',
                    width: 25
                },
                {
                    background: 'orange',
                    width: 50
                },
                {
                    background: 'purple',
                    width: 25
                },

            ]
        },
        {
            background: '#00F',
            updateTime: 5000,
            elements: [
                {
                    background: 'green',
                    width: 50
                },
                {
                    background: 'black',
                    width: 50
                },
            ]
        },
    ]
}

const body = document.body;
const PERCENT = '%';
const initialHeight = 100;
const initialWidth = 100;

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const initElements = (params) => {
    const lines = params && Array.isArray(params.lines) && [...params.lines];
    const linesHeight = lines && (initialHeight / lines.length) + 'vh';

    const buildElements = (lines, initDiv = null,update=null) => {

        lines && lines.forEach(item => {
            if (item.elements && Array.isArray(item.elements)) {
                const linesWrapper = document.createElement('div');
                linesWrapper.style.background = item.background;
                linesWrapper.style.width = initialWidth + 'vw';
                linesWrapper.style.height = linesHeight;
                linesWrapper.style.display = 'flex';
                linesWrapper.dataset.time = item.updateTime
                buildElements(item.elements, linesWrapper,item.updateTime);
                body.appendChild(linesWrapper)
            } else {
                const elementWrapper = document.createElement('div');
                elementWrapper.style.background = item.background;
                setInterval(() => elementWrapper.style.background = getRandomColor(), update)
                elementWrapper.style.width = item.width + PERCENT;
                elementWrapper.style.height = 100 + PERCENT;
                initDiv.appendChild(elementWrapper)
            }
        })

    }

    buildElements(lines)

}

initElements(params)