import { supabase } from '../lib/supabase';
import { ContactInquiry } from '../types/database';

export const submitContactInquiry = async (inquiry: Omit<ContactInquiry, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert([inquiry])
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error instanceof Error ? error.message : 'An error occurred' };
  }
};