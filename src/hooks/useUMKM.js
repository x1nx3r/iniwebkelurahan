// src/hooks/useUMKM.js
import { useState, useEffect, useCallback } from "react";
import {
  getUMKM,
  getUMKMBySlug,
  searchUMKM,
  getPaginatedUMKM,
  getFeaturedUMKM,
} from "../lib/firestore";

/**
 * Hook for getting all UMKM
 */
export function useUMKM(options = {}) {
  const [umkm, setUmkm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUMKM = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUMKM(options);
      setUmkm(data);
    } catch (err) {
      setError(err.message);
      console.error("Error in useUMKM:", err);
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(options)]);

  useEffect(() => {
    fetchUMKM();
  }, [fetchUMKM]);

  return {
    umkm,
    loading,
    error,
    refetch: fetchUMKM,
  };
}

/**
 * Hook for UMKM search
 */
export function useUMKMSearch() {
  const [umkm, setUmkm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (searchTerm) => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchUMKM(searchTerm);
      setUmkm(data);
    } catch (err) {
      setError(err.message);
      console.error("Error searching UMKM:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearSearch = useCallback(() => {
    setUmkm([]);
    setError(null);
  }, []);

  return {
    umkm,
    loading,
    error,
    search,
    clearSearch,
  };
}

/**
 * Hook for paginated UMKM
 */
export function usePaginatedUMKM(pageSize = 9) {
  const [umkm, setUmkm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState(null);

  const loadUMKM = useCallback(
    async (reset = false) => {
      try {
        if (reset) {
          setLoading(true);
          setUmkm([]);
          setLastDoc(null);
          setHasMore(true);
        } else {
          setLoadingMore(true);
        }

        setError(null);

        const {
          umkm: newUMKM,
          lastDoc: newLastDoc,
          hasMore: moreAvailable,
        } = await getPaginatedUMKM(pageSize, reset ? null : lastDoc);

        if (reset) {
          setUmkm(newUMKM);
        } else {
          setUmkm((prev) => [...prev, ...newUMKM]);
        }

        setLastDoc(newLastDoc);
        setHasMore(moreAvailable);
      } catch (err) {
        setError(err.message);
        console.error("Error loading paginated UMKM:", err);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [pageSize, lastDoc],
  );

  useEffect(() => {
    loadUMKM(true);
  }, []);

  const loadMore = useCallback(() => {
    if (!loadingMore && hasMore) {
      loadUMKM(false);
    }
  }, [loadUMKM, loadingMore, hasMore]);

  const refresh = useCallback(() => {
    loadUMKM(true);
  }, [loadUMKM]);

  return {
    umkm,
    loading,
    loadingMore,
    error,
    hasMore,
    loadMore,
    refresh,
  };
}

/**
 * Hook for single UMKM detail
 */
export function useUMKMDetail(slug) {
  const [umkm, setUmkm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUMKM = useCallback(async () => {
    if (!slug) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await getUMKMBySlug(slug);
      setUmkm(data);

      if (!data) {
        setError("UMKM tidak ditemukan");
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching UMKM detail:", err);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchUMKM();
  }, [fetchUMKM]);

  return {
    umkm,
    loading,
    error,
    refetch: fetchUMKM,
  };
}

/**
 * Hook for featured UMKM
 */
export function useFeaturedUMKM(count = 6) {
  const [umkm, setUmkm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFeaturedUMKM = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getFeaturedUMKM(count);
      setUmkm(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching featured UMKM:", err);
    } finally {
      setLoading(false);
    }
  }, [count]);

  useEffect(() => {
    fetchFeaturedUMKM();
  }, [fetchFeaturedUMKM]);

  return {
    umkm,
    loading,
    error,
    refetch: fetchFeaturedUMKM,
  };
}

/**
 * Hook for UMKM with search and filters combined
 */
export function useUMKMWithSearch(initialOptions = {}) {
  const [umkm, setUmkm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Fetch all UMKM initially
  const fetchAllUMKM = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUMKM(initialOptions);
      setUmkm(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching UMKM:", err);
    } finally {
      setLoading(false);
    }
  }, [JSON.stringify(initialOptions)]);

  // Search function
  const search = useCallback(
    async (term) => {
      setSearchTerm(term);

      if (!term || term.trim() === "") {
        setIsSearching(false);
        await fetchAllUMKM();
        return;
      }

      try {
        setIsSearching(true);
        setLoading(true);
        setError(null);
        const data = await searchUMKM(term);
        setUmkm(data);
      } catch (err) {
        setError(err.message);
        console.error("Error searching UMKM:", err);
      } finally {
        setLoading(false);
      }
    },
    [fetchAllUMKM],
  );

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchTerm("");
    setIsSearching(false);
    fetchAllUMKM();
  }, [fetchAllUMKM]);

  // Initial load
  useEffect(() => {
    fetchAllUMKM();
  }, [fetchAllUMKM]);

  return {
    umkm,
    loading,
    error,
    searchTerm,
    isSearching,
    search,
    clearSearch,
    refetch: fetchAllUMKM,
  };
}
