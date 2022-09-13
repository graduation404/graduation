import axios from 'axios';
const baseURL = 'https://localhost:7043/api';
export default axios.create({
  baseURL: baseURL,
  timeout: 30000,
});

// get All users
export const GetAllUsers = async () => {
  try {
    const {data} = await axios.get('/users');
    return data;
  } catch (error) {
    console.log('error all users', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};

// get specifiec user
export const GetSpecifiecUser = async id => {
  try {
    const {data} = await axios.get('/users/' + id);
    return data;
  } catch (error) {
    console.log('error specifiec users', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};
// delete specifiec user
export const DeleteSpecifiecUser = async id => {
  try {
    const {data} = await axios.delete('/users/' + id);
    return data;
  } catch (error) {
    console.log('error delete users', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};

// Creating a user
export const CreateUser = async userData => {
  try {
    const {data} = await axios.post('/users', userData);
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('error create users', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating a quiz
export const CreateQuiz = async quizData => {
  try {
    const {data} = await axios.post('/quizs', quizData);
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('error Create quiz', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};

// get All quizes
export const GetAllQuizs = async () => {
  try {
    const {data} = await axios.get('/quizs');
    return data;
  } catch (error) {
    console.log('error all quizs', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};

// delete specifiec quiz
export const DeleteSpecifiecQuiz = async id => {
  try {
    const {data} = await axios.delete('/quizs/' + id);
    return data;
  } catch (error) {
    console.log('error delete quizs', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};

// get specifiec quiz
export const GetSpecifiecQuiz = async id => {
  try {
    const {data} = await axios.get('/quizs/' + id);
    return data;
  } catch (error) {
    console.log('error specifiec quizs', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};

// get quizs in level and booklet
export const GetQuizsInLevelAndBooklet = async (level, booklet) => {
  try {
    const {data} = await axios.get('/quizs/' + level + '/' + booklet);
    return data;
  } catch (error) {
    console.log(
      'error quizs in level and booklet',
      error.response.data.message,
    );
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Creating a Quiz Result

// Creating a quiz
export const CreateUserquizs = async quizData => {
  try {
    const {data} = await axios.post('/Userquizs', quizData);
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('error Create quiz', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};

// Get All Userquizs
export const GetAllUserquizs = async () => {
  try {
    const {data} = await axios.get('/Userquizs');
    return data;
  } catch (error) {
    console.log('error all Userquizs', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};

// get specifiec quiz
export const GetSpecifiecUserquizs = async id => {
  try {
    const {data} = await axios.get('/Userquizs/' + id);
    return data;
  } catch (error) {
    console.log('error specifiec Userquizs', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};

// get Userquizs in level and booklet
export const GetUserquizsInLevelAndBooklet = async (UserId, level, booklet) => {
  try {
    const {data} = await axios.get(
      '/Userquizs/GetByUserIdAndLevelAndBooklet/' +
        UserId +
        '/' +
        level +
        '/' +
        booklet,
    );
    return data;
  } catch (error) {
    console.log(
      'error Userquizs in level and booklet',
      error.response.data.message,
    );
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert(message);
    throw new Error(message);
  }
};
