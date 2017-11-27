import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Avatar from './components/Avatar';
import Message from './components/Message';
import NameWithHandle from './components/NameWithHandle';
import ReplyButton from './components/ReplyButton';
import RetweetButton from './components/RetweetButton';
import LikeButton from './components/LikeButton';
import MoreButton from './components/MoreButton';
import Time from './components/Time';

function Tweet() {
    return (
        <div className='tweet'>
            <Avatar />
            <div className='content'>
                <NameWithHandle /><Time />
                <Message />
                <div className='buttons'>
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreButton />
                </div>
            </div>
        </div>
    );
}

render(<Tweet />, document.getElementById('root'));
