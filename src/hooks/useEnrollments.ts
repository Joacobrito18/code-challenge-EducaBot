import { useEffect, useState, useMemo } from 'react';
import { fetchEnrollments } from '../api/enrollments';
import type { Enrollment } from '../types/enrollment';

export const useEnrollments = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    setLoading(true)
    fetchEnrollments()
      .then((data: Enrollment[]) => setEnrollments(data))
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  const filteredEnrollments = useMemo(() => {
    let result = enrollments;

    if (statusFilter !== 'all') {
      result = result.filter((enrollment) => enrollment.status === statusFilter);
    }

    if (searchText.trim() !== '') {
      const searchLower = searchText.toLowerCase().trim();
      result = result.filter(
        (enrollment) =>
          enrollment.student_name.toLowerCase().includes(searchLower) ||
          enrollment.email.toLowerCase().includes(searchLower)
      );
    }

    return result;
  }, [enrollments, statusFilter, searchText]); 

  const addEnrollment = (enrollment: Enrollment) => {
    setEnrollments(prev => [...prev, enrollment]);
  };

  const confirmEnrollment = (id: string) => {
    setEnrollments(prev => 
      prev.map(enrollment => 
        enrollment.id === id ? { ...enrollment, status: 'confirmed' } : enrollment
      )
    )
  }

    return {
        enrollments,
        filteredEnrollments,
        loading,
        error,
        statusFilter,
        searchText,
        setSearchText,
        setStatusFilter,
        addEnrollment,
        confirmEnrollment,
    };
}