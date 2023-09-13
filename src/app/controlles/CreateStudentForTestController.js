import * as Yup from 'yup'
import CreatedFormTest from '../models/CreatedFormTest'


class CreateStudentForTest {
  async store(request, response) {
    const schema = Yup.object().shape({
      release_date: Yup.string().required(),
      student_name: Yup.string().required(),
      cpf: Yup.string().required(),
      renach: Yup.string().required(),
      instructor: Yup.string().required(),
      class_indication: Yup.string().optional(),
      passed_the_test: Yup.string().optional(),
      payment_of_duda: Yup.string().optional(),
      vehicles: Yup.string().required(),
      comments: Yup.string().optional()
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { 
      release_date, 
      student_name, 
      renach, 
      instructor, 
      class_indication, 
      passed_the_test, 
      payment_of_duda,
      vehicles,
      cpf,
      comments
    } = request.body

    const studentsForTest = await CreatedFormTest.create({
      release_date,
      student_name,
      renach,
      instructor,
      class_indication,
      passed_the_test, 
      payment_of_duda,
      vehicles,
      cpf,
      comments
    })

    return response.json(studentsForTest)
  }


  async update(request, response) {
    const schema = Yup.object().shape({
      release_date: Yup.string(),
      student_name: Yup.string(),
      cpf: Yup.string(),
      renach: Yup.string(),
      instructor: Yup.string(),
      class_indication: Yup.string(),
      vehicles: Yup.string(),
      passed_the_test: Yup.string().required(),
      payment_of_duda: Yup.string().required(),
      comments: Yup.string()
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { id } = request.params

    const userExists = await CreatedFormTest.findOne({
      where: { id },
    })

    if (!userExists) {
      return response.status(400).json({ error: 'User not found' })
    }

    const {
      release_date,
      student_name,
      renach,
      instructor,
      class_indication,
      passed_the_test,
      payment_of_duda,
      vehicles,
      cpf,
      comments
    } = request.body

    await CreatedFormTest.update(
      {
        release_date,
        student_name,
        renach,
        instructor,
        class_indication,
        passed_the_test,
        payment_of_duda,
        vehicles,
        cpf,
        comments
      },
      { where: { id } }
    )

    return response.json({ message: 'status was update sucessfully' })
  }

  async index(request, response) {
    try {
      const students = await CreatedFormTest.findAll()
      response.status(200).json(students)
    } catch (error) {
      console.log(error)
      response.status(500).send('Internal server error')
    }
  }
}


export default new CreateStudentForTest()
