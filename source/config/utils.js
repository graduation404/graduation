import axios from 'axios';
const baseURL = 'http://www.medicalapi.somee.com/api';
export default axios.create({
  baseURL: baseURL,
  timeout: 30000,
});

// get All users
export const GetAllUsers = async (setData,setError,setrefres) => {
  try {
    const { data } = await axios.get(baseURL + '/users');
    setData(data)
    setrefres(false)
    // return data;
  } catch (error) {
    console.log('error all users', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
      setError(error.response.data.message)

    } else {
      message = 'connection-error';
      setError('connection-error')
    }

    alert(message);  
      // return message
setError(message)
    throw new Error(message);
  }
};

// get specifiec user
export const GetSpecifiecUser = async id => {
  try {
    const { data } = await axios.get(baseURL + '/users/' + id);
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
    const { data } = await axios.delete(baseURL + '/users/' + id);
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
    const { data } = await axios.post(baseURL + '/users', userData);
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
    const { data } = await axios.post(baseURL + '/quizs', quizData);
    alert( 'created');
    return data;
  } catch (error) {
    console.log('error Create quiz', error.response.data.message);
    let message = '';
    if (error.response !== undefined) {
      message = error.response.data.message;
    } else {
      message = 'connection-error';
    }

    alert('message');
    throw new Error(message);
  }
};

// get All quizes
export const GetAllQuizs = async () => {
  try {
    const { data } = await axios.get(baseURL + '/quizs');
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
    const { data } = await axios.delete(baseURL + '/quizs/' + id);
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
    const { data } = await axios.get(baseURL + '/quizs/' + id);
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
export const GetQuizsInLevelAndBooklet = async (level, booklet,GetQuiz,setQuiz) => {
  try {
    const { data } = await axios.get(baseURL + '/quizs/getbylevelandbooklet' + '/' + level + '/' + booklet);
    for(let i=0;i<=data.length;i++){
      GetQuiz.push(data[i].quizQuestions[0].question)
      setQuiz(GetQuiz)
      // return GetQuiz
    }
    //  console.log(data)
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
    const { data } = await axios.post(baseURL + '/Userquizs', quizData);
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
export const GetAllUserquizs = async (setData) => {
  try {
    const { data } = await axios.get(baseURL + '/Userquizs');
    setData(data)
    console.log(data)
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
export const GetSpecifiecUserquizs = async (id,setData )=> {
  try {
    const { data } = await axios.get(baseURL + '/Userquizs/' + id);
     setData(data)
     console.log(data)
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
    const { data } = await axios.get(
      baseURL + '/Userquizs/GetByUserIdAndLevelAndBooklet/' +
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
