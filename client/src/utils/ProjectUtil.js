export default class ProjectUtil {
  static getFieldValue(project, fieldId) {
    const value = project.values.find(
      fieldValue => fieldValue.fieldId === fieldId
    )

    return value ? value.value : null
  }
}
